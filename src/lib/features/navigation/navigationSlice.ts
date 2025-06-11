import { createSlice } from '@reduxjs/toolkit';
import { NavigationState } from './types';


const initialState: NavigationState = {
  sections: [
    {
      items: [
        { label: 'Dashboard', icon: 'dashboard', path: '/dashboard' },
        { label: 'Analytics', icon: 'analytics', path: '/analytics' },
        { label: 'Surveys', icon: 'surveys', path: '/surveys' },
        { label: 'Deals', icon: 'deals', path: '/deals' },
      ],
    },
    {
      title: 'Admin',
      items: [
        { label: 'Dashboard', icon: 'admin-user', path: '/admin/dashboard' },
        { label: 'Accounts', icon: 'user', path: '/admin/accounts' },
      ],
    },
  ],
  scrollToTopSignal: 0 // used as a trigger
};


const navigationSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    triggerScrollToTop: (state) => {
      state.scrollToTopSignal += 1; // increment triggers effect
    },
  },
});

export const { triggerScrollToTop } = navigationSlice.actions;
export default navigationSlice.reducer;


