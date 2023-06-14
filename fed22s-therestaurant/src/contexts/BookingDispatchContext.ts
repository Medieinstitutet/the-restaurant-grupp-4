import { createContext, Dispatch } from "react";
import { IAction } from "../reducers/BookingsReducer";

export const BookingDispatchContext = createContext<Dispatch<IAction>>(() => {
  return;
});
