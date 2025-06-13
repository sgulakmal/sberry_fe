import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WallItem, WallState } from './types';


const initialState: WallState = {
  wallItems: []
};

const wallSlice = createSlice({
  name: 'wall',
  initialState,
  reducers: {
    addPostsToWall: (
      state,
      action: PayloadAction<{ wallItem: WallItem, isNew?: boolean }>
    ) => {
      const { wallItem, isNew } = action.payload;
      if (isNew) {
        state.wallItems.unshift(wallItem);
      } else {
        state.wallItems.push(wallItem);
      }
    },
  },
});

export const { addPostsToWall } = wallSlice.actions;
export default wallSlice.reducer;
