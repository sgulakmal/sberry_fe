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
      celebrationName: 'birthday',
      celebrationDate: new Date("2025-06-16"),
    },
    {
      userId: '2',
      name: 'John Smith',
      avatarUrl: '/img/prof-img.png',
      celebrationName: 'birthday',
      celebrationDate: new Date("2025-06-22"),
    },    {
      userId: '2',
      name: 'Edvin All',
      avatarUrl: '/img/prof-img.png',
      celebrationName: 'Anniversary',
      celebrationDate: new Date("2025-03-22"),
    }, {
      userId: '2',
      name: 'Dilantha Perera',
      avatarUrl: '/img/prof-img.png',
      celebrationName: 'birthday',
      celebrationDate: new Date("2025-06-15"),
    },
    {
      userId: '3',
      name: 'Alice Johnson',
      avatarUrl: '/img/prof-img.png',
      celebrationName: 'birthday',
      celebrationDate: new Date("2025-06-18"),
}]                        //action.payload;
    },
  },
});

export const { setUpcommingCelebration } = upcommingSlice.actions;
export default upcommingSlice.reducer;