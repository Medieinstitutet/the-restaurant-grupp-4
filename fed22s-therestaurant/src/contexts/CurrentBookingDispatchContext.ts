import { createContext, Dispatch } from "react";
import { IAction } from "../reducers/BookingsReducer";

interface ISomething {
  dispatch: Dispatch<IAction>;
}

export const CurrentBookingDispatchContext = createContext<Dispatch<IAction>>(
  () => {
    return;
  }
);
