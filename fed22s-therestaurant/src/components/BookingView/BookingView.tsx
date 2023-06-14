import { useContext } from "react";
import { IBooking } from "../../models/IBooking";
import {
  deleteBookingById,
  getAllBookings,
  getBookingById,
} from "../../services/BookingService";
import { StyledTd } from "../Styled/StyledTd";
import { StyledTr } from "../Styled/StyledTr";
import { BookingDispatchContext } from "../../contexts/BookingDispatchContext";
import { CurrentBookingDispatchContext } from "../../contexts/CurrentBookingDispatchContext";
import {
  CurrentBookingContext,
  ICurrentBookingContext,
} from "../../contexts/CurrentBookingContext";

interface IBookingViewProps {
  booking: IBooking;
}

export const BookingView = ({ booking }: IBookingViewProps) => {
  const dispatchBookings = useContext(BookingDispatchContext);
  const dispatchCurrentBooking = useContext(CurrentBookingDispatchContext);

  const id = booking._id || "";

  const handleClickChange = async () => {
    console.log("handleClickChange has been run with id: " + id);

    const bookingFromApi = await getBookingById(id);

    const currentBooking: ICurrentBookingContext = {
      booking: bookingFromApi,
      toggle: false,
    };

    dispatchCurrentBooking({
      type: "gotbooking",
      payload: JSON.stringify(currentBooking),
    });
  };

  const handleClickCancel = async () => {
    console.log("handleClickCancel has been run with id: " + id);

    await deleteBookingById(id);

    const bookingsFromApi = await getAllBookings();

    dispatchBookings({
      type: "gotbookings",
      payload: JSON.stringify(bookingsFromApi),
    });
  };

  return (
    <StyledTr>
      <StyledTd>{booking.date}</StyledTd>
      <StyledTd>{booking.time}</StyledTd>
      <StyledTd>{booking.numberOfGuests}</StyledTd>
      <StyledTd>{booking.customer.name}</StyledTd>
      <StyledTd>{booking.customer.email}</StyledTd>
      <StyledTd>{booking.customer.phone}</StyledTd>
      <StyledTd>{booking._id}</StyledTd>
      <StyledTd>
        <button onClick={handleClickChange}>Ändra</button>
      </StyledTd>
      <StyledTd>
        <button onClick={handleClickCancel}>Avboka</button>
      </StyledTd>
    </StyledTr>
  );
};
