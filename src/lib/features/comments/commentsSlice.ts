// features/comments/commentSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Comment, CommentsState } from "./types";

// const initialComment: Comment = {
//   id: 0,
//    postId:'post1',
//   text:'ss',
//   likes: 0,
//   replies: [],
//   replyInput:'' ,
// };

// interface CommentState {
//   commentsByPostId: Record<string, Comment[]>;
// }
const initialState: CommentsState = {
  commentsByPostId: {},
};

const commentSlice = createSlice({
  name: "comments",
  initialState,
     reducers: {
        // setInitialComments: (
        //   state,
        //   action: PayloadAction<{ postId: string; comments: Comment[] }>
        // ) => {
        //   const { postId, comments } = action.payload;
        //   state.commentsByPostId[postId] = {
        //     ...initialComment,
        //     ...comments,
        //   };
        // },
    // addComment: (
    //   state,
    //   action: PayloadAction<{ postId: string; comment: string }>
    // ) => {
    //   const { postId, comment } = action.payload;
    //  const newComment: Comment = {
    //     id: Date.now(),
    //     text: comment,
    //     likes: 0,
    //     replies: [],
    //     replyInput: "",
    //   };


    // },

addComment: (
  state,
  action: PayloadAction<{ postId: string; text: string }>
) => {
  const { postId, text } = action.payload;
  const newComment: Comment = {
    id: Date.now(),
    postId: postId,
    text,
    likes: 0,
    replies: [],
    replyInput: "",
  };
  state.commentsByPostId[postId] = [newComment, ...(state.commentsByPostId[postId] || [])];
},





    likeComment: (
      state, 
      action: PayloadAction<{ postId: string; id: number }>) => {
      
      //  const { postId, id } = action.payload;
      const comment = state.commentsByPostId[action.payload.postId].find((c) => c.id=== action.payload.id);
      if (comment) comment.likes += 1;
    },
    updateReplyInput: (
      // state,
      // action: PayloadAction<{ id: number; value: string }>
    ) => {
      // const comment = state.comments.find((c) => c.id === action.payload.id);
      // if (comment) comment.replyInput = action.payload.value;
    },
    // addReply: (state, action: PayloadAction<{ id: number }>) => {
    //   const comment = state.comments.find((c) => c.id === action.payload.id);
    //   if (comment && comment.replyInput?.trim()) {
    //     comment.replies.push({
    //       id: Date.now(),
    //       text: comment.replyInput,
    //     });
    //     comment.replyInput = "";
    //   }
    // },
  },
});

export const { addComment, likeComment, updateReplyInput } =
  commentSlice.actions;

export default commentSlice.reducer;