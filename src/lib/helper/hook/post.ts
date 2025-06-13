// hooks/useAddPostToStore.ts
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { addPostsToWall } from '@/lib/features/wall/wallSlice';
import { setInitialPost } from '@/lib/features/post/postSlice';
import { setInitialReaction } from '@/lib/features/reactions/reactionsSlice';
import { AppDispatch } from "@/lib/store";
import { Post } from "@/lib/features/post/types";


export const useAddPostToStore = () => {
    const dispatch = useDispatch<AppDispatch>();

    return useCallback((posts: Post[], isNew?: boolean) => {
        posts.forEach(post => {
            dispatch(addPostsToWall({ postId: post.postId, isNew }));
            dispatch(setInitialPost({ postId: post.postId, post }));
            dispatch(setInitialReaction({ postId: post.postId, reactions: post.reactions }));
        });
    }, [dispatch]);
};
