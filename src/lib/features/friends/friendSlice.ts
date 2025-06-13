import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Friend } from './types';


interface FriendState {
  friends: Friend[];
}

const initialState: FriendState = {
  friends: [
    {
      id: '1',
      name: 'Jane Doe',
      avatar: '/img/prof-img.png',
      highlights: { birthday: '2025-06-10' },
    },
    {
      id: '2',
      name: 'John Smith',
      avatar: '/img/prof-img.png',
      highlights: { workAnniversary: '2025-06-20'},
    },
    {
      id: '3',
      name: 'Alice Johnson',
      avatar: '/img/prof-img.png',
      highlights: { graduation: '2025-06-30' },
    },
    {
      id: '4',
      name: 'Michael Lee',
      avatar: '/img/prof-img.png',
      highlights: { farewell: '2025-07-10' },
    },
  ],
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