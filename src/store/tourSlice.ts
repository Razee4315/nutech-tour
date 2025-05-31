import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Location } from '../types';

interface TourState {
  currentLocation: number;
  visitHistory: number[];
  isLoading: boolean;
  locations: Location[];
}

const initialState: TourState = {
  currentLocation: 13, // Start at Main Entrance
  visitHistory: [13],
  isLoading: true,
  locations: [], // Will be populated with your locations data
};

const tourSlice = createSlice({
  name: 'tour',
  initialState,
  reducers: {
    setCurrentLocation: (state, action: PayloadAction<number>) => {
      state.currentLocation = action.payload;
      state.visitHistory.push(action.payload);
    },
    goBack: (state) => {
      if (state.visitHistory.length > 1) {
        state.visitHistory.pop();
        state.currentLocation = state.visitHistory[state.visitHistory.length - 1];
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setCurrentLocation, goBack, setLoading } = tourSlice.actions;
export default tourSlice.reducer;