import { useContext } from "react";
import { BookingView } from "../BookingView/BookingView";
import { StyledTable } from "../Styled/StyledTable";
import { StyledTr } from "../Styled/StyledTr";
import { StyledTh } from "../Styled/StyledTh";
import { BookingsContext } from "../../contexts/BookingsContext";
import "./BookingList.scss";

export const BookingList = () => {
  const bookings = useContext(BookingsContext);

  const html = bookings.map((booking) => (
    <BookingView key={booking.id} booking={booking}></BookingView>
  ));

  //Keys på styledTh i nedan html med?

  return (
    <div className="wrapper-table">
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
