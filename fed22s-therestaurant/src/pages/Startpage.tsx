import React from 'react';
import CarouselSlider from '../components/Carousel/Carousel';
import { StyledDiv } from "../components/Styled/StyledDiv";
import './StartPage.scss';
import CommentSection from '../components/BoxesStart/BoxesStart';



export const Startpage = () => {
  const boxTexts = ["ett", "tva", "tre", "fyra"];
  return (
    <>
      <StyledDiv>
        <section>
          <div className="rubrik">
            <h1 className="fade-in-heading">The Local Host</h1>
          </div>
          <div className='presentationBox'>
            <p>Vi hälsar dig hjärtligt välkommen till vår restaurang. Ta plats och njut av en kulinarisk upplevelse som kommer att tillfredsställa dina smaklökar. Vi är här för att göra din tid hos oss minnesvärd och trivsam. Välkommen till en gastronomisk resa fylld av omsorgsfullt tillagade rätter och en välkomnande atmosfär.
            </p>
            <p>Varmt välkommen till The Local Host!</p>
          </div>
          <div className="carousel-container">
            <CarouselSlider />
          </div>
        </section>
      </StyledDiv>
      <CommentSection></CommentSection>
    </>
  );
};