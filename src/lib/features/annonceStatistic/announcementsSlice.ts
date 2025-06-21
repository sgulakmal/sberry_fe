import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AnnouncementsStatisticState, AnnouncementStatistics } from './types';




const initialState: AnnouncementsStatisticState = {
  data : {announcementId:'',
  title: '',
  totalAcknowledgements:0,
  acknowledgementRate:0,
  averageRating: 0,
  ratingCount:0,},
    loading: false,
  error: null,
};

const announcementStatisticSlice = createSlice({
  name: 'announcementStatistic',
  initialState,
  reducers: {

    // setemptyData(state, action: PayloadAction<any>) {
    //       state.data = action.payload;
        
    //     },

        setAnnouncementsStatistic(state, action: PayloadAction<AnnouncementStatistics>) {
          state.data =  action.payload;
           state.loading = false;
        
        },
  },
});

export const { setAnnouncementsStatistic } = announcementStatisticSlice.actions;
export default announcementStatisticSlice.reducer;