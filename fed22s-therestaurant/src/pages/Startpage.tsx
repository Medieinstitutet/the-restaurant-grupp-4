import React from 'react';
import CarouselSlider from '../components/Carousel/Carousel';
import { StyledDiv } from "../components/Styled/StyledDiv";
import './StartPage.scss';
import BoxesStart from '../components/BoxesStart/BoxesStart';



export const Startpage = () => {
  const boxTexts = ["Ruta 1", "Ruta 2", "Ruta 3", "Ruta 4"];
  return (
    <>
      <StyledDiv>
        <div className="rubrik">
          <h1 className="fade-in-heading">The Local Host</h1>
        </div>
        <div>
          <p>Vi hälsar dig hjärtligt välkommen till vår restaurang. Ta plats och njut av en kulinarisk upplevelse som kommer att tillfredsställa dina smaklökar. Vi är här för att göra din tid hos oss minnesvärd och trivsam. Välkommen till en gastronomisk resa fylld av omsorgsfullt tillagade rätter och en välkomnande atmosfär.
          </p>
          <p>Varmt välkommen till The Local Host!</p>
        </div>
        <div className="carousel-container">
          <CarouselSlider />
        </div>
        <BoxesStart />
      </StyledDiv>

    </>
  );
};