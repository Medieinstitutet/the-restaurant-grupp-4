import { useState } from "react"
import "./pageNavigation.scss"
import { Link } from "react-router-dom";

export const PageNavigation = () => {

    const [menuChange, setMenuChange] = useState("");
    const [navChange, setNavChange] = useState("nav");
    const [bgChange, setBgChange] = useState("menu-bg");
    const [activeMenu, setActiveMenu] = useState(false);



    const menuOnClick = () => {
        if (!activeMenu) {
            setMenuChange("change")
            setNavChange("nav change")
            setBgChange("menu-bg change-bg")
            setActiveMenu(true)
        }
        else {

            setMenuChange("")
            setNavChange("nav")
            setBgChange("menu-bg")
            setActiveMenu(false)


        }

    }


    return <>
        <div className="navContainer">
            <div id="menu">
                <div className={menuChange} id="menu-bar" onClick={menuOnClick}>
                    <div id="bar1" className="bar"></div>
                    <div id="bar2" className="bar"></div>
                    <div id="bar3" className="bar"></div>
                </div>
                <nav className={navChange} id="nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/booking">Bookings</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>

            <div className={bgChange} id="menu-bg"></div>
        </div>
    </>
}