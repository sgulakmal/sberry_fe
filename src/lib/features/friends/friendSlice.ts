import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Friend } from "./types";

interface FriendState {
  friends: Friend[];
}
const initialState: FriendState = {
  friends: [],
};


const friendSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    setFriends(state, action: PayloadAction<Friend[]>) {
      state.friends = action.payload;
    },
  },
});

export const { setFriends } = friendSlice.actions;
export default friendSlice.reducer;