import { ChangeEvent } from "react";
import { IBooking } from "../../models/IBooking";
import "./bookingSelect.scss"

interface IBookingSelectProps {
  userInput: IBooking;
  handleChange(e: ChangeEvent<HTMLSelectElement>): void;
}

export const BookingSelect = ({ userInput, handleChange }: IBookingSelectProps) => {
  return (
    <div className="selectBox">
    <select className="selectInput" name="numberOfPeople" value={userInput.numberOfGuests} onChange={handleChange}>
      <option value="">Please select number of guests</option>
      {[...Array(12)].map((_, index) => (
        <option key={index + 1} value={String(index + 1)}>
          {index + 1}
        </option>
      ))}
    </select>
    </div>
  );
};
