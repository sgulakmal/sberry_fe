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
      avatar: '/avatar1.png',
      highlights: { birthday: '2025-05-15' },
    },
    {
      id: '2',
      name: 'John Smith',
      avatar: '/avatar2.png',
      highlights: { workAnniversary: '2022-05-01' },
    },
    {
      id: '3',
      name: 'Alice Johnson',
      avatar: '/avatar3.png',
      highlights: { graduation: '2023-05-30' },
    },
    {
      id: '4',
      name: 'Michael Lee',
      avatar: '/avatar4.png',
      highlights: { farewell: '2025-05-10' },
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