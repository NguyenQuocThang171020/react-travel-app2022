import axios from "axios";
import {
  getAllUserError,
  getAllUserStart,
  getAllUserSuccess,
  loginError,
  loginStart,
  loginSuccess,
  logoutError,
  logoutStart,
  logoutSuccess,
  registerError,
  registerStart,
  registerSuccess,
} from "./userSlice";
import {
  getAllTourStart,
  getAllTourSuccess,
  getAllTourError,
} from "./tourSlice";
import {
  getHotelStart,
  getHotelSuccess,
  getHotelError,
  detailHotelStart,
  detailHotelSuccess,
  detailHotelError,
} from "./hotelSlice";
import {
  postTicketStart,
  postTicketSuccess,
  postTicketError,
  getTicketStart,
  getTicketSuccess,
  getTicketError,
  deleteTicketStart,
  deleteTicketError,
  deleteTicketSuccess,
} from "./ticketSlice";
const url = "https://server-travel-app.herokuapp.com"
export const getAllUser = async (dispatch) => {
  dispatch(getAllUserStart());
  try {
    const res = await axios.get(`${url}/auth/user`);
    dispatch(getAllUserSuccess(res.data));
  } catch (error) {
    dispatch(getAllUserError(error.response.data));
  }
};
export const loginUser = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${url}/auth/login`, user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginError(error.response.data));
  }
};
export const registerUser = async (dispatch, post) => {
  dispatch(registerStart());
  try {
    await axios.post(`${url}/auth/register`, post);
    dispatch(registerSuccess());
  } catch (error) {
    dispatch(registerError(error.response.data));
  }
};
export const logoutUser = async (dispatch, navigate) => {
  dispatch(logoutStart());
  try {
    navigate(`/login`);
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.response.data));
  }
};
export const getAllTour = async (dispatch) => {
  dispatch(getAllTourStart());
  try {
    const res = await axios.get(`${url}/v1/travel`);
    dispatch(getAllTourSuccess(res.data));
  } catch (error) {
    dispatch(getAllTourError(error.response.data));
  }
};
export const getHotel = async (dispatch, id) => {
  dispatch(getHotelStart());
  try {
    const res = await axios.get(`${url}/api/hotels/${id}`);
    dispatch(getHotelSuccess(res.data));
  } catch (error) {
    dispatch(getHotelError(error.response.data));
  }
};
export const detailHotel = async (dispatch, id) => {
  dispatch(detailHotelStart());
  try {
    const res = await axios.get(`${url}/api/detail/${id}`);
    dispatch(detailHotelSuccess(res.data));
  } catch (error) {
    dispatch(detailHotelError(error.response.data));
  }
};
export const postTicket = async (dispatch, ticket) => {
  dispatch(postTicketStart());
  try {
    await axios.post(`${url}/admin/create`,ticket)
    dispatch(postTicketSuccess())
  } catch (error) {
    dispatch(postTicketError(error.response.data))
  }
};
export const getTicket = async (dispatch) => {
  dispatch(getTicketStart());
  try {
    const res = await axios.get(`${url}/admin/ticket`)
    dispatch(getTicketSuccess(res.data))
    dispatch(postTicketSuccess())
  } catch (error) {
    dispatch(getTicketError(error.response.data))
  }
}
export const deleteTicket = async(dispatch,id)=>{
  dispatch(deleteTicketStart());
  try {
    await axios.delete(`${url}/admin/delete/${id}`)
    dispatch(deleteTicketSuccess())
  } catch (error) {
    dispatch(deleteTicketError(error.response.data))
  }
}