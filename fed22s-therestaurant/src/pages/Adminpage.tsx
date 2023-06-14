import { useEffect, useReducer } from "react";
import { BookingList } from "../components/BookingList/BookingList";
import { BookingsReducer } from "../reducers/BookingsReducer";
import { BookingsContext } from "../contexts/BookingsContext";
import { BookingDispatchContext } from "../contexts/BookingDispatchContext";
import { getAllBookings } from "../services/BookingService";
import { CurrentBookingReducer } from "../reducers/CurrentBookingReducer";
import {
  CurrentBookingContext,
  defaultCurrentBoookingContext,
} from "../contexts/CurrentBookingContext";
import { CurrentBookingDispatchContext } from "../contexts/CurrentBookingDispatchContext";
import { ChangeBooking } from "../components/ChangeBooking/ChangeBooking";

import "./AdminPage.scss";

export const Adminpage = () => {
  const [bookings, dispatchBookings] = useReducer(BookingsReducer, []);
  const [currentBooking, dispatchCurrentBooking] = useReducer(
    CurrentBookingReducer,
    defaultCurrentBoookingContext
  );

  useEffect(() => {
    if (bookings.length > 0) return;

    const getData = async () => {
      const bookingsFromApi = await getAllBookings();

      dispatchBookings({
        type: "gotbookings",
        payload: JSON.stringify(bookingsFromApi),
      });
    };

    if (bookings.length === 0) {
      getData();
    }
  }, []);

  return (
    <BookingsContext.Provider value={bookings}>
      <BookingDispatchContext.Provider value={dispatchBookings}>
        <CurrentBookingContext.Provider value={currentBooking}>
          <CurrentBookingDispatchContext.Provider
            value={dispatchCurrentBooking}
          >
            {!currentBooking.toggle && <ChangeBooking></ChangeBooking>}
            {currentBooking.toggle && <BookingList></BookingList>}
          </CurrentBookingDispatchContext.Provider>
        </CurrentBookingContext.Provider>
      </BookingDispatchContext.Provider>
    </BookingsContext.Provider>
  );
};
