import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Startpage } from "./pages/Startpage";
import { Bookingpage } from "./pages/Bookingpage";
import { Contactpage } from "./pages/Contactpage";
import { Adminpage } from "./pages/Adminpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { path: "/", element: <Startpage></Startpage>, index: true },
      { path: "/booking", element: <Bookingpage></Bookingpage> },
      { path: "/contact", element: <Contactpage></Contactpage> },
      { path: "/admin", element: <Adminpage></Adminpage> },
    ],
  },
]);
