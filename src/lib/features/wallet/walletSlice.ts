import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PointModel } from './types';


interface PointsState {
  points: PointModel[];
}

const initialState: PointsState = {
  points: [
    { author: { id: '1', name: 'Admin' }, point: 30, date: new Date(), cr_dr: 'credit', naration: 'Initial balance' },
    { author: { id: '2', name: 'System' }, point: 200, date: new Date(), cr_dr: 'credit', naration: 'Pot balance' },
  ],
};

const pointsSlice = createSlice({
  name: 'points',
  initialState,
  reducers: {
    redeemPoints: (state, action: PayloadAction<number>) => {
      state.points.push({
        author: { id: 'self', name: 'You' },
        point: -action.payload,
        date: new Date(),
        cr_dr: 'debit',
        naration: 'Redeemed Points',
      });
    },
  },
});

export const { redeemPoints } = pointsSlice.actions;
export default pointsSlice.reducer;
