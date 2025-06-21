import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Announcement } from './types';


interface AnnouncementListState {
  data: Announcement[];
    loading: boolean;
  error: string | null;
}

const initialState: AnnouncementListState = {
  data: [],
    loading: false,
  error: null,
};

const announcementSlice = createSlice({
  name: 'announcement',
  initialState,
  reducers: {
    // acknowledgeAnnouncement(state, action: PayloadAction<string>) {
    //   const ann = state.data.find(a => a.announcementId === action.payload);
    //   if (ann) {
    //    // ann.acknowledged = true;
    //   }
    // },
    // setemptyData(state, action: PayloadAction<any>) {
    //       state.data = [];
        
    //     },

        setAnnouncementsList(state, action: PayloadAction<{items: Announcement[]}>) {
          state.data = action.payload.items;
           state.loading = false;
        
        },
  },
});

export const {  setAnnouncementsList } = announcementSlice.actions;
export default announcementSlice.reducer;