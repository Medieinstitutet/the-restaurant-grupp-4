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
    case "filtered": {
      const searchPhrase = action.payload;

      if (!searchPhrase) {
        return bookings;
      }

      const filteredBookings = bookings.filter(
        (booking) => booking.date === searchPhrase
      );

      return filteredBookings;
    }

    default:
      break;
  }

  return bookings;
};
