import { Link } from "react-router-dom"
import "./confirmation.scss"
interface IConfirmationProps {
    msg: string,
    name?: string;
}



export const Confirmation = ({msg, name}: IConfirmationProps) => {
    return <>
    <div className="confirmationBox">
        <h2>Tack {name}, <span>{msg}</span></h2>
        <p>Clicka <Link to="/">här</Link> för att komma tillbaka till startsidan.</p>
    </div>
    
    </>
}