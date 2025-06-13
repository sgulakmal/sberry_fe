'use client';

import { VariableSizeList as List, ListOnItemsRenderedProps } from 'react-window';
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
import AnnouncementBanner from './Announcements';
import { ScrollContainer } from '../utils';


export default function Wall() {
    const dispatch = useDispatch<AppDispatch>();
    const wall: WallState = useSelector((state: AppStore) => state.wall);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const isLoadingRef = useRef(false);
    const [isReady, setIsReady] = useState(false); // guard to prevent initial mismatch
    const [listHeight, setListHeight] = useState(0);
    const listRef = useRef<List>(null);
    const scrollSignal = useSelector((state: AppStore) => state.navigation.scrollToTopSignal);

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
    

    useEffect(() => {
        listRef.current?.scrollToItem(0, 'start');
    }, [scrollSignal]); // fires every time signal is incremented

    const fetchPosts = async (page: number) => {
        if (isLoadingRef.current || !hasMore) return;

        isLoadingRef.current = true;

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}posts`);
            const posts: { items: Post[] } = await res.json();

            if (posts.items.length === 0) {
                setHasMore(false);
                return;
            }

            posts.items.forEach(post => {
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

    const Row = ({ index }: { index: number }) => {
        const postId = wall.postIds[index];
        return (

            <Posts postId={postId} />

        );
    };

    // ❗ Delay rendering until posts are fetched to prevent hydration mismatch
    if (!isReady) return <div>Loading Wall...</div>;

    const getItemSize = (index: number) => {
        return index === 0 ? 1200 : 800;
    };


    return (
        <div style={{ height: listHeight, width: '60vw' }}>
            <List
                ref={listRef}
                outerElementType={ScrollContainer}
                height={listHeight}
                itemCount={wall.postIds.length}
                itemSize={getItemSize}
                width="100%"
                onItemsRendered={handleItemsRendered}
                className="scrollbar-hide"
            >
                {({ index, style }) => (
                    <div style={style}>
                        {index === 0 && <AnnouncementBanner />}
                        <Row index={index} />
                    </div>
                )}
            </List>
        </div>
    );
}


