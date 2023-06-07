import { ChangeEvent } from "react";

interface IBookingRadioProps {
  handleChange(e: ChangeEvent<HTMLInputElement>): void;
}

export const BookingRadio = ({ handleChange }: IBookingRadioProps) => {
  return (
    <>
      <label htmlFor="early">18:00</label>
      <input
        type="radio"
        value="18:00"
        onChange={handleChange}
        name="time"
        id="early"
      />
      <label htmlFor="late">21:00</label>
      <input
        type="radio"
        value="21:00"
        onChange={handleChange}
        name="time"
        id="late"
      />
    </>
  );
};
