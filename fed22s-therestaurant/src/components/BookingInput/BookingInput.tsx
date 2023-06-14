import { ChangeEvent, useState } from "react";
import { IBooking } from "../../models/IBooking";
import { Gdpr } from "../Gdpr/Gdpr";

interface IBookingInputProps {
  userInput: IBooking;
  handleChange(e: ChangeEvent<HTMLInputElement>): void;
}

export const BookingInput = ({ userInput, handleChange }: IBookingInputProps) => {
  const [approved, setApproved] = useState(false);
  const switchFunc = () => {
    setApproved(!approved);
  }
  return (
    <div className="bookingInput">
      <input
        type="text"
        value={userInput.customer.name}
        onChange={handleChange}
        name="name"
        placeholder="name"
      />
      <input
        type="text"
        value={userInput.customer.phone}
        onChange={handleChange}
        name="phone"
        placeholder="Phone"
      />
      <input
        type="text"
        value={userInput.customer.email}
        onChange={handleChange}
        name="email"
        placeholder="Email"
      />
      <div><Gdpr switchFunc={switchFunc}></Gdpr></div>
      <button disabled={!approved}>Spara</button>
      </div>
  );
};
