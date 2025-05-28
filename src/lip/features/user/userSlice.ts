import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isLoggedIn: boolean;
  name: string | null;
  email: string | null;
}

const initialState: UserState = {
  isLoggedIn: false,
  name: null,
  email: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ name: string; email: string }>) {
      state.isLoggedIn = true;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.name = null;
      state.email = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
