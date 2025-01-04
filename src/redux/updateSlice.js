import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isClicked: false,
  rank: 1,
  percentile: 80,
  score: 10,
};

const updateSlice = createSlice({
  name: 'update', 
  initialState,
  reducers: {
    toggleClick: (state) => {
      state.isClicked = !state.isClicked; 
    },
    updateRank: (state, action) => {
      state.rank = action.payload;
    },
    updatePercentile: (state, action) => {
      state.percentile = action.payload;
    },
    updateScore: (state, action) => {
      state.score = action.payload;
    },
  },
});

export const { toggleClick,updateRank, updatePercentile, updateScore } = updateSlice.actions;
export default updateSlice.reducer;
