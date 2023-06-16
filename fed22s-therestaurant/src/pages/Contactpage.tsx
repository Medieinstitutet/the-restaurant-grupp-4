import ContactForm from "../components/Contact/ContactForm";
import { StyledForm } from "../components/Styled/StyledForm";
import map from "./../assets/photos/map.jpeg"
import "./ContactPage.scss"

export const Contactpage = () => {
  return (
    <>
      <div className="container">
        <form className="styled-form">
          <ContactForm />
        </form>
        <div className="mapimage">
          <img src={map} alt="Pinned map" />
          <div className="text-container">
            <section>Vi finns på Gamla Havsgränd 23, intill Lobster Mobster.
              <p>Nå oss per telefon; 08/654 32 10</p>
              <p>Skicka annars ett meddelande via formuläret så svarar vi inom 24h!</p>
            </section>
          </div>
        </div>

      </div>
    </>
  );
};