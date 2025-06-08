import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post, PostState } from '../post/types';


const initialState: PostState = {
  postByPostId: {},
};

const wallSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setInitialPost: (
      state,
      action: PayloadAction<{ postId: string, post: Post }>
    ) => {
      const { postId, post } = action.payload;
      state.postByPostId[postId] = post;
    },
  },
});

export const { setInitialPost } = wallSlice.actions;
export default wallSlice.reducer;
