import { RootState } from '@/lip/store';
// import { Comment } from './types';
// import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createSelector } from '@reduxjs/toolkit';


//export const commentSelector: TypedUseSelectorHook<RootState> = useSelector;

// export const commentSelector =  ( state: RootState, postId: string)
// : Comment[] => {
//   return (state.comments.commentsByPostId[postId],[{
//         id: Date.now(),
//         postId:'post1',
//         text: 'love',
//         likes: 0,
//         replies: [],
//         replyInput: "",
//       }]);
// };
export const commentSelector = (postId: string) =>
  createSelector(
    (state: RootState) => state.comments.commentsByPostId,
    (commentsByPostId) => commentsByPostId[postId] || []
  );
