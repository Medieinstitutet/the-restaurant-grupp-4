import { IBooking } from "../models/IBooking";
import axios from "axios";

const BASE_URL = "http://localhost:4000/api/v1/bookings";

const get = async <T>(endpoint: string) => {
  const response = await axios.get<T>(`${BASE_URL}${endpoint}`);
  return response.data;
};

const post = async <T>(endpoint: string, data: T) => {
  const response = await axios.post<T>(`${BASE_URL}${endpoint}`, data);
  return response.data;
};

const put = async <T>(endpoint: string, data: T) => {
  const response = await axios.put<T>(`${BASE_URL}${endpoint}`, data);
  return response.data;
};

const del = async (endpoint: string) => {
  const response = await axios.delete(`${BASE_URL}${endpoint}`);
  return response.data;
};

export const getAllBookings = async (): Promise<IBooking[]> => {
  return await get<IBooking[]>("");
};

export const getBookingById = async (id: string): Promise<IBooking> => {
  return await get<IBooking>(`/${id}`);
};

export const createNewBooking = async (
  newBooking: IBooking
): Promise<IBooking> => {
  return await post<IBooking>("", newBooking);
};

export const updateBookingById = async (
  id: string,
  booking: IBooking
): Promise<IBooking> => {
  return await put<IBooking>(`/${id}`, booking);
};

export const deleteBookingById = async (id: string) => {
  return await del(`/${id}`);
};
