import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WallState } from './types';


const initialState: WallState = {
  postIds: [],
  activePostId: undefined,
  loading: true
};

const wallSlice = createSlice({
  name: 'wall',
  initialState,
  reducers: {
    addPostsToWall: (
      state,
      action: PayloadAction<{ postId: string, isNew?: boolean }>
    ) => {
      const { postId, isNew } = action.payload;
      if (isNew) {
        state.postIds.unshift(postId);
      } else {
        state.postIds.push(postId);
      }

      state.loading = false;
    },
  },
});

export const { addPostsToWall } = wallSlice.actions;
export default wallSlice.reducer;
