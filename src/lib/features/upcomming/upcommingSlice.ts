import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UpcommingCelebration } from './types';



interface UpcommingState {
  //UpcommingCelebrations: UpcommingCelebration[];
    data: UpcommingCelebration[];
  loading: boolean;
  error: string | null;
}

const initialState: UpcommingState = {

    data:[],
  loading: false,
  error: null
  
};

const upcommingSlice = createSlice({
  name: 'upcommingCelebrations',
  initialState,
  reducers: {
    setUpcommingCelebration(state, action: PayloadAction<any>) {
      state.data =    [    {
      userId: '1',
      name: 'Jane Doe',
      avatarUrl: '/img/prof-img.png',
      celebrationName: 'birthday'
    },
    {
      userId: '2',
      name: 'John Smith',
      avatarUrl: '/img/prof-img.png',
      celebrationName: 'birthday'
    },
    {
      userId: '3',
      name: 'Alice Johnson',
      avatarUrl: '/img/prof-img.png',
      celebrationName: 'birthday',
}]                        //action.payload;
    },
  },
});

export const { setUpcommingCelebration } = upcommingSlice.actions;
export default upcommingSlice.reducer;