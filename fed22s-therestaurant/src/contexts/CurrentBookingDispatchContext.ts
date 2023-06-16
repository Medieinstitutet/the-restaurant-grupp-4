import { createContext, Dispatch } from "react";
import { IAction } from "../reducers/BookingsReducer";

export const CurrentBookingDispatchContext = createContext<Dispatch<IAction>>(
  () => {
    return;
  }
);
