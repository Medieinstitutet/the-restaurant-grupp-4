import { Outlet } from "react-router";
import { PageNavigation } from "./Navigation/PageNavigation";
import "./layout.scss";
/* import Footer from "../components/Footer/Footer"; */

export const Layout = () => {
  return (
    <>
      <header><PageNavigation></PageNavigation></header>
      <main>
        <Outlet></Outlet>
      </main>
      {/*       <Footer></Footer> */}
    </>
  );
};
