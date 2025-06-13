import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthUser, UserState } from './type';


const initialState: UserState = {
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<AuthUser>) {
      state.user = action.payload
    },
    logout(state) {
      state.user = undefined
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
