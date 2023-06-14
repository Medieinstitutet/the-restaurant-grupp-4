import { ChangeEvent, useContext, useState } from "react";
import { BookingView } from "../BookingView/BookingView";
import { StyledTable } from "../Styled/StyledTable";
import { StyledTr } from "../Styled/StyledTr";
import { StyledTh } from "../Styled/StyledTh";
import { BookingsContext } from "../../contexts/BookingsContext";
import "./BookingList.scss";
import { BookingDispatchContext } from "../../contexts/BookingDispatchContext";
import { getAllBookings } from "../../services/BookingService";

export const BookingList = () => {
  const bookings = useContext(BookingsContext);
  const dispatchBookings = useContext(BookingDispatchContext);
  const [userInput, setUserInput] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "text") {
      setUserInput(e.target.value);
    }
  };

  const handleClick = async () => {
    const bookingsFromApi = await getAllBookings();

    dispatchBookings({
      type: "gotbookings",
      payload: JSON.stringify(bookingsFromApi),
    });

    dispatchBookings({
      type: "filtered",
      payload: userInput,
    });
  };

  const html = bookings.map((booking) => (
    <BookingView key={booking.id} booking={booking}></BookingView>
  ));

  return (
    <div className="wrapper-table">
      <label htmlFor="search">Sök datum: </label>
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        name="search"
        id="search"
      />
      <button onClick={handleClick}>Sök</button>

      <StyledTable>
        <thead>
          <StyledTr>
            <StyledTh>Datum</StyledTh>
            <StyledTh>Tid</StyledTh>
            <StyledTh>Antal</StyledTh>
            <StyledTh>Namn</StyledTh>
            <StyledTh>E-post</StyledTh>
            <StyledTh>Telefon</StyledTh>
            <StyledTh>Bokningsnummer</StyledTh>
          </StyledTr>
        </thead>
        <tbody>{html}</tbody>
      </StyledTable>
    </div>
  );
};
