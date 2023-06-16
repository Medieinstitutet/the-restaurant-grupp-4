import { IBooking } from "../models/IBooking";


//Checkdate tar emot en lista och tid + datum och jämför dessa, ger tillbaka en filtrerad lista med bokningar som passar in på kriterierna.

export const checkDate = (list:IBooking[], date:string, time:string) => {
  const filtered = list.filter(dates => {
     return dates.date === date && dates.time === time;
   })
 return filtered;
 }
 
 //Checktables tar emot en lista som kontrollerar om det finns bord kvar. Ger tillbaka antal lediga bord.

 export const checkTablesLeft = (list: IBooking[]) => {     
   let numberOfTables = 15;
   
   for (let i = 0; i < list.length; i++) {
     
     if (list[i].numberOfGuests < 7) numberOfTables -= 1;
     else numberOfTables -=2;
   }
   
   return numberOfTables >= 0 ? numberOfTables : 0;
 }



//Mockdata som för närvarande inte används.
export const mockBookingData:IBooking[] = [
    {
      date: "2023-06-10",
      time: "18:00",
      numberOfGuests: 16,
      customer: {
        name: "name1",
        email: "mail1",
        phone: "phone1",
      },
    },
    {
      date: "2023-06-10",
      time: "18:00",
      numberOfGuests: 6,
      customer: {
        name: "name2",
        email: "mail2",
        phone: "phone2",
      },
    },
    {
      date: "2023-06-10",
      time: "18:00",
      numberOfGuests: 6,
      customer: {
        name: "name3",
        email: "mail3",
        phone: "phone3",
      },
    },
    {
      date: "2023-06-10",
      time: "18:00",
      numberOfGuests: 12,
      customer: {
        name: "name5",
        email: "mail5",
        phone: "phone5",
      },
    },
    {
      date: "2023-06-10",
      time: "18:00",
      numberOfGuests: 14,
      customer: {
        name: "name5",
        email: "mail5",
        phone: "phone5",
      },
    },
    {
      date: "2023-06-10",
      time: "18:00",
      numberOfGuests: 10,
      customer: {
        name: "name6",
        email: "mail6",
        phone: "phone6",
      },
    },
    {
      date: "2023-06-10",
      time: "18:00",
      numberOfGuests: 11,
      customer: {
        name: "name7",
        email: "mail7",
        phone: "phone7",
      },
    },
    {
      date: "2023-06-10",
      time: "21:00",
      numberOfGuests: 11,
      customer: {
        name: "name20",
        email: "mail20",
        phone: "phone20",
      },
    },
    {
      date: "2023-06-11",
      time: "test-time",
      numberOfGuests: 3,
      customer: {
        name: "name8",
        email: "mail8",
        phone: "phone8",
      },
    },
    {
      date: "2023-06-11",
      time: "test-time",
      numberOfGuests: 3,
      customer: {
        name: "name9",
        email: "mail9",
        phone: "phone9",
      },
    },
    {
      date: "2023-06-11",
      time: "test-time",
      numberOfGuests: 10,
      customer: {
        name: "name10",
        email: "mail10",
        phone: "phone10",
      },
    },
    {
      date: "2023-06-11",
      time: "test-time",
      numberOfGuests: 6,
      customer: {
        name: "name11",
        email: "mail11",
        phone: "phone11",
      },
    },
  ];
  