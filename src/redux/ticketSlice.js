import { createSlice } from "@reduxjs/toolkit";
export const ticketSlice = createSlice({
  name: "ticket",
  initialState: {
    postTicket: {
      isLoading: false,
      success: false,
      isError: null,
    },
    getTicket: {
      isLoading: false,
      ticket: null,
      isError: null,
    },
    deleteTicket: {
      isLoading: false,
      success: false,
      isError: null,
    },
  },
  reducers: {
    postTicketStart: (state) => {
      state.postTicket.isLoading = true;
    },
    postTicketSuccess: (state) => {
      state.postTicket.isLoading = false;
      state.postTicket.success = true;
      state.postTicket.isError = null;
    },
    postTicketError: (state, actions) => {
      state.postTicket.isLoading = false;
      state.postTicket.isError = actions.payload;
    },
    getTicketStart: (state) => {
      state.getTicket.isLoading = true;
    },
    getTicketSuccess: (state, actions) => {
      state.getTicket.isLoading = false;
      state.getTicket.ticket = actions.payload;
      state.getTicket.isError = null;
    },
    getTicketError: (state, actions) => {
      state.getTicket.isLoading = false;
      state.getTicket.isError = actions.payload;
    },
    deleteTicketStart: (state) => {
      state.deleteTicket.isLoading = true;
    },
    deleteTicketSuccess: (state) => {
      state.deleteTicket.isLoading = false;
      state.deleteTicket.actions = true;
      state.deleteTicket.isError = null;
    },
    deleteTicketError: (state, actions) => {
      state.deleteTicket.isLoading = false;
      state.deleteTicket.isError = actions.payload;
    },
  },
});
export const {
  postTicketStart,
  postTicketSuccess,
  postTicketError,
  getTicketStart,
  getTicketSuccess,
  getTicketError,
  deleteTicketStart,
  deleteTicketSuccess,
  deleteTicketError,
} = ticketSlice.actions;
export default ticketSlice.reducer;
