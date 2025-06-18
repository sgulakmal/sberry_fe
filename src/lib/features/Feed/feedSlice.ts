import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Post {
  id: string;
  user: string;
  content: string;
  createdAt: string;
}

interface FeedState {
  posts: Post[];
}

const initialState: FeedState = {
  posts: [],
};

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<{ user: string; content: string }>) => {
      const newPost: Post = {
        id: Date.now().toString(),
        user: action.payload.user,
        content: action.payload.content,
        createdAt: new Date().toISOString(),
      };
      state.posts.unshift(newPost); // newest-first
    },
  },
});

export const { addPost } = feedSlice.actions;
export default feedSlice.reducer;