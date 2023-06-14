import { createContext } from "react";
import { IBooking, defaultBooking } from "../models/IBooking";

// innehålla en booking och en boolean?

export interface ICurrentBookingContext {
  booking: IBooking;
  toggle: boolean;
}

export const defaultCurrentBoookingContext: ICurrentBookingContext = {
  booking: defaultBooking,
  toggle: true,
};

export const CurrentBookingContext = createContext<ICurrentBookingContext>(
  defaultCurrentBoookingContext
);
