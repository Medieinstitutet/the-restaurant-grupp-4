import { ChangeEvent } from "react";
import "./grpr.scss"

interface IGrdpProps {
    switchFunc(e: ChangeEvent<HTMLInputElement>): void;
}

export const Gdpr = ({switchFunc}: IGrdpProps) => {
    return (<>
    <div className="gdprWrapper">
        <div className="gdprBox"><p>
            Hej,
            Vi värnar om din integritet och skyddet av dina personuppgifter. Vi följer de riktlinjer och bestämmelser som fastställts i EU:s dataskyddsförordning (GDPR) för att säkerställa att dina personuppgifter hanteras på ett säkert och ansvarsfullt sätt.
            Vi samlar endast in de personuppgifter som är nödvändiga för att kunna tillhandahålla våra tjänster och förbättra din användarupplevelse. Vi använder dessa uppgifter enbart för det angivna ändamålet och delar dem inte med tredje part utan ditt samtycke, om det inte krävs enligt lag.
            Du har rätt att begära tillgång till dina personuppgifter, korrigera eventuella felaktigheter och få dem raderade om de inte längre är nödvändiga för det ändamål de samlades in för. Vi vidtar lämpliga åtgärder för att skydda dina personuppgifter mot oavsiktlig eller olaglig förstörelse, förlust eller ändring.
            Om du har några frågor eller vill utöva dina rättigheter enligt GDPR, vänligen kontakta oss på [kontaktinformation].
            Tack för att du väljer att vara en del av vår gemenskap!
            Vänliga hälsningar,
        </p>
        <div className="gdprInput">
             <label htmlFor="approve">Godkänn</label>
            <input type="checkbox" id="approve" onChange={switchFunc}></input>
            </div></div>
            </div>
    </>)
}