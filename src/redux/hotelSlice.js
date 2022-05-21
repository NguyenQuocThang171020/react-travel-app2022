import { createSlice } from "@reduxjs/toolkit";
export const hotelSlice = createSlice({
  name: "hotel",
  initialState: {
    getHotel: {
      isLoading: false,
      currentHotel: null,
      isError: null,
    }
    ,detailHotel:{
      isLoading: false,
      hotel: null,
      isError: null,
    }
  },
  reducers: {
    getHotelStart: (state) => {
      state.getHotel.isLoading = true;
    },
    getHotelSuccess: (state, actions) => {
      state.getHotel.isLoading = false;
      state.getHotel.currentHotel = actions.payload;
      state.getHotel.isError = null;
    },
    getHotelError: (state, actions) => {
      state.getHotel.isLoading = false;
      state.getHotel.isError = actions.payload;
    },
    detailHotelStart: (state) => {
      state.detailHotel.isLoading = true;
    },
    detailHotelSuccess: (state, actions) => {
      state.detailHotel.isLoading = false;
      state.detailHotel.hotel = actions.payload;
      state.detailHotel.isError = null;
    },
    detailHotelError: (state, actions) => {
      state.detailHotel.isLoading = false;
      state.detailHotel.isError = actions.payload;
    }
  }
});
export const {
  getHotelStart,getHotelSuccess,getHotelError,detailHotelStart,detailHotelSuccess,detailHotelError
} = hotelSlice.actions;
export default hotelSlice.reducer;
