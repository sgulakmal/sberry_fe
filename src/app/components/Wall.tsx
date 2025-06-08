'use client';

import { FixedSizeList as List, ListOnItemsRenderedProps } from 'react-window';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';

import { Post } from '@/lib/features/post/types';
import { WallState } from '@/lib/features/wall/types';
import { addPostsToWall } from '@/lib/features/wall/wallSlice';
import { AppDispatch } from '@/lib/store';
import { AppStore } from '@/lib/type';
import { setInitialPost } from '@/lib/features/post/postSlice';
import { setInitialReaction } from '@/lib/features/reactions/reactionsSlice';
import Posts from './Posts';

export default function Wall() {
    const dispatch = useDispatch<AppDispatch>();
    const wall: WallState = useSelector((state: AppStore) => state.wall);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const isLoadingRef = useRef(false);
    const [isReady, setIsReady] = useState(false); // guard to prevent initial mismatch
    const [listHeight, setListHeight] = useState(0);


    useEffect(() => {

        const headerHeight = 100; // Adjust this based on header height
        const updateHeight = () => {
            setListHeight(window.innerHeight - headerHeight);
        };

        if (typeof window !== 'undefined') {
            updateHeight();
            window.addEventListener('resize', updateHeight);
            return () => window.removeEventListener('resize', updateHeight);
        }
    }, []);
    useEffect(() => {
        fetchPosts(page);
    }, [page]);

    const fetchPosts = async (page: number) => {
        if (isLoadingRef.current || !hasMore) return;

        isLoadingRef.current = true;

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?page=${page}`);
            const posts: Post[] = await res.json();

            if (posts.length === 0) {
                setHasMore(false);
                return;
            }

            posts.forEach(post => {
                dispatch(addPostsToWall(post.postId));
                dispatch(setInitialPost({ postId: post.postId, post }));
                dispatch(setInitialReaction({ postId: post.postId, reactions: post.reactions }));
            });

            // Only mark ready after initial fetch
            if (!isReady) setIsReady(true);

        } finally {
            isLoadingRef.current = false;
        }
    };

    const handleItemsRendered = ({ visibleStopIndex }: ListOnItemsRenderedProps) => {
        const preloadThreshold = 5;
        if (visibleStopIndex >= wall.postIds.length - preloadThreshold && hasMore) {
            setPage(prev => prev + 1);
        }
    };

    const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
        const postId = wall.postIds[index];
        return (
            <div style={style}>
                <Posts postId={postId} />
            </div>
        );
    };

    // ❗ Delay rendering until posts are fetched to prevent hydration mismatch
    if (!isReady) return <div>Loading Wall...</div>;

    return (
        <List
            height={listHeight}
            itemCount={wall.postIds.length}
            itemSize={500}
            width={'100%'}
            onItemsRendered={handleItemsRendered}
        >
            {Row}
        </List>
    );
}
