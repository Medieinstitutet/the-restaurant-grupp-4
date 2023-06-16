export interface IBooking {
  [x: string]: any;
  date: string;
  time: string;
  numberOfGuests: number;
  customer: ICustomer;
  _id?: string;
}
export interface ICustomer {
  name: string;
  email: string;
  phone: string;
}
export const defaultCustomer: ICustomer = { name: "", email: "", phone: "" };
export const defaultBooking: IBooking = {
  date: "",
  time: "",
  numberOfGuests: 0,
  customer: defaultCustomer,
};
