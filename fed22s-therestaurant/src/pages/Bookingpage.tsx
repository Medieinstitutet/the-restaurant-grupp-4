import "./bookingPage.scss"
import { useState } from "react";
import { BookTable } from "../components/BookTable/BookTable";
import { CancelTable } from "../components/CancelTable/CancelTable";



export const Bookingpage = () => {

    const [isBooking, setIsShown] = useState(false);
    const [isCancel, setIsCancel] = useState(false);


    return <>
    <div className="bookingPageBox">
        {!isBooking && !isCancel && (
            <button className="bookBtn" onClick={() => setIsShown(true)}>Boka bord</button>)}
        {isBooking && (<BookTable></BookTable>)}
        {!isCancel && !isBooking && (
            <button className="bookBtn" onClick={() => setIsCancel(true)}>Avboka bord</button>)}
        {isCancel && (<CancelTable></CancelTable>)}
        </div>
    </>;



}