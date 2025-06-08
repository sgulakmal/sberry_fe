import { Post } from '@/lib/features/post/types';
import { WallState } from '@/lib/features/wall/types';
import { addPostsToWall } from '@/lib/features/wall/wallSlice';
import { AppDispatch } from '@/lib/store';
import { AppStore } from '@/lib/type';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setInitialPost } from '@/lib/features/post/postSlice';
import Posts from './Posts';
import { setInitialReaction } from '@/lib/features/reactions/reactionsSlice';


export default function Wall() {

    const dispatch = useDispatch<AppDispatch>();
    const wall: WallState = useSelector((state: AppStore) => state.wall);

    const setData = (posts: Post[]) => {
        posts.forEach(post => {
            dispatch(addPostsToWall(post.postId))
            dispatch(setInitialPost({ postId: post.postId, post }));
            dispatch(setInitialReaction({ postId: post.postId, reactions: post.reactions }));
        });

    }

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
            .then(res => res.json())
            .then(setData);
    }, []);

    return (
        <>
            {wall.loading && 'Wall Loading....'}
            {wall.postIds.map((postId, index) => (
                <Posts key={postId + index} postId={postId}></Posts>
            ))}

        </>

    )
}
