import { IBooking } from "../models/IBooking";

export interface IAction {
  type: string;
  payload: string;
}

export const BookingsReducer = (
  bookings: IBooking[],
  action: IAction
): IBooking[] => {
  switch (action.type) {
    case "gotbookings": {
      return JSON.parse(action.payload);
    }
    //default: (felhantering)
  }

  return bookings;
};
