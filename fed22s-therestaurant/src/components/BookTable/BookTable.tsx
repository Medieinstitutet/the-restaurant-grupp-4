import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import Calendar from "react-calendar";
import { checkDate, checkTablesLeft } from "../../functions/functions";
import { Confirmation } from "../Confirmation/Confirmation";
import { BookingSelect } from "../BookingSelect/BookingSelect";
import { BookingRadio } from "../BookingRadio/BookingRadio";
import { BookingInput } from "../BookingInput/BookingInput";
import { createNewBooking, getAllBookings } from "../../services/BookingService";
import { IBooking, defaultBooking } from "../../models/IBooking";
import "./bookTable.scss"
export const BookTable = () => {

  const [userInput, setUserInput] = useState<IBooking>(defaultBooking)
  const [errMsg, setErrMsg] = useState("");
  const [isFree, setIsFree] = useState(false);
  const [dateState, setDateState] = useState(new Date());
  const [isDone, setIsDone] = useState(false);
  const [userId, setUserId] = useState<IBooking>(defaultBooking);
  const [bookings, setBookings] = useState<IBooking[]>([]);
  
  useEffect(() => {
    const loadData = async()=> {
        const data: IBooking[] = await getAllBookings();
        setBookings(data)
    }
    const controlInput = async () => {   
      if (bookings) {
        const results = checkDate(bookings, userInput.date, userInput.time);
        const tablesLeft = checkTablesLeft(results);
        console.log(tablesLeft)
        console.log(userInput.numberOfGuests)
        console.log(bookings)

        if (tablesLeft === 0) {
          setIsFree(false);
          setUserInput(defaultBooking);
          setErrMsg("Det finns inga bord att boka den dagen!");
          return;
        }

        if (userInput.numberOfGuests > 6 && tablesLeft === 1) {
          setIsFree(false)
          setErrMsg("Vi har tyvärr bara ett bord ledigt, till max 6 gäster!");
          setUserInput(defaultBooking);
          return;
        } else {
          setIsFree(true);
        }
      }
    };

    if (bookings.length < 1) {
      loadData();
    }
    if (userInput.date) {
      controlInput();
    }
  }, [userInput]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setUserInput({ ...userInput, date: dateState.toLocaleDateString() });
    if (isFree) {
      setUserId(await createNewBooking(userInput))
      setIsDone(true)
    }
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => { 
    const { name, type, value } = e.target;
    if (type === "text") {
      setUserInput({ ...userInput, customer: { ...userInput.customer, [name]: value } });
    } else if (type === "radio") {
      setUserInput({ ...userInput, time: value });
    } else if (type === "select-one") {
      setUserInput({ ...userInput, numberOfGuests: parseInt(value) });
    }
  };
  return <>
    {!isFree && (<div className="bookingBox">
      <form onSubmit={handleSubmit}>
        <div className="calandarBox">
        <Calendar value={dateState} onClickDay={setDateState} minDate={new Date()} ></Calendar></div>
        <BookingSelect userInput={userInput} handleChange={handleChange} />
        <BookingRadio handleChange={handleChange} />
        <button className="goBtn" disabled={!userInput.time || !userInput.date && userInput.numberOfGuests < 1}>Gå vidare</button>
        <h2>{errMsg}</h2>
      </form>
    </div>)}
    {isFree && !isDone && (
      <form onSubmit={handleSubmit}>
        <BookingInput userInput={userInput} handleChange={handleChange}></BookingInput>
      </form>
    )}
    {isDone && isFree && <Confirmation name={userId.customer.name} msg={`Ditt bord är nu bokat med bokningsnummer: ${userId._id}`}></Confirmation>}
  </>
}