import { Link } from "react-router-dom"
interface IConfirmationProps {
    msg: string,
    name?: string;
}



export const Confirmation = ({msg, name}: IConfirmationProps) => {
    return <>
    <div className="confirmationDiv">
        <h1>Tack {name}, {msg}</h1>
        <p>Clicka <Link to="/">här</Link> för att komma tillbaka till startsidan.</p>
    </div>
    
    </>
}