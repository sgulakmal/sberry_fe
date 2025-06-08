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
      action: PayloadAction<string>
    ) => {
       state.postIds.push(action.payload);
       state.loading = false;
    },
  },
});

export const { addPostsToWall } = wallSlice.actions;
export default wallSlice.reducer;
