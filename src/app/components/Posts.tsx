import React from 'react';
import Reactions from './Reactions';
import CommentComponent from './Comments';
import { useSelector } from 'react-redux';
import { AppStore } from '@/lib/type';
import { Post } from '@/lib/features/post/types';

export default function Posts({ postId }) {
  const post: Post = useSelector((state: AppStore) => state.post.postByPostId[postId]);

  return (
    (post ? <>
      <h2>Post #{postId}</h2>
      <p>{post.content}</p>
      <Reactions postId={postId} />
      <CommentComponent postId={postId} />
    </> : <>Post Not Found for id {postId} <br /></>) 
  );
}
