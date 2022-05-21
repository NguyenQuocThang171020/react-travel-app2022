import { createSlice } from "@reduxjs/toolkit";
export const tourSlice = createSlice({
  name: "tour",
  initialState: {
    getAllTour: {
      isLoading: false,
      currentTour: null,
      isError: null,
    }
  },
  reducers: {
    getAllTourStart: (state) => {
      state.getAllTour.isLoading = true;
    },
    getAllTourSuccess: (state, actions) => {
      state.getAllTour.isLoading = false;
      state.getAllTour.currentTour = actions.payload;
      state.getAllTour.isError = null;
    },
    getAllTourError: (state, actions) => {
      state.getAllTour.isLoading = false;
      state.getAllTour.isError = actions.payload;
    }
  }
});
export const {
  getAllTourStart,getAllTourSuccess,getAllTourError
} = tourSlice.actions;
export default tourSlice.reducer;
