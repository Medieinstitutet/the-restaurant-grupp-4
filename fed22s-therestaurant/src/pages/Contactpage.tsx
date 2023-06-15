import ContactForm from "../components/Contact/ContactForm";
import { StyledForm } from "../components/Styled/StyledForm";

import map from "./../assets/photos/map.jpeg"

export const Contactpage = () => {
  return (
    <>
      <div className="form-image-container">
        <form className="styled-form">
          <ContactForm></ContactForm>
        </form>
        <img src={map} alt="Pinned map" />
      </div>
    </>
  );
};