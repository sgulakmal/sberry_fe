import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Announcement } from './types';


interface AnnouncementState {
  announcements: Announcement[];
}

const initialState: AnnouncementState = {
  announcements: [
    {
      id: '1',
      message: '🚀 New feature released: Dark Mode!',
      postedBy: 'Admin',
      rating: 4,
      acknowledged: false,
    },
        {
      id: '2',
      message: '🚀 New feature released: Dark Mode!',
      postedBy: 'Nuwan',
      rating: 2,
      acknowledged: false,
    },
  ],
};

const announcementSlice = createSlice({
  name: 'announcement',
  initialState,
  reducers: {
    acknowledgeAnnouncement(state, action: PayloadAction<string>) {
      const ann = state.announcements.find(a => a.id === action.payload);
      if (ann) {
        ann.acknowledged = true;
      }
    },
  },
});

export const { acknowledgeAnnouncement } = announcementSlice.actions;
export default announcementSlice.reducer;