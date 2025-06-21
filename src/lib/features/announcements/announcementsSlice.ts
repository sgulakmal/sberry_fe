import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Announcement } from './types';


interface AnnouncementState {
  data: Announcement[];
    loading: boolean;
  error: string | null;
}

const initialState: AnnouncementState = {
  data: [],
    loading: false,
  error: null,
};

const announcementSlice = createSlice({
  name: 'announcement',
  initialState,
  reducers: {
    acknowledgeAnnouncement(state, action: PayloadAction<string>) {
      const ann = state.data.find(a => a.announcementId === action.payload);
      if (ann) {
       // ann.acknowledged = true;
      }
    },
    setemptyData(state) {
          state.data = [];
        
        },

        setAnnouncements(state, action: PayloadAction<{items: Announcement[]}>) {
          state.data = action.payload.items;
           state.loading = false;
        
        },
  },
});

export const { acknowledgeAnnouncement , setAnnouncements, setemptyData } = announcementSlice.actions;
export default announcementSlice.reducer;