import React from 'react';
import CarouselSlider from '../components/Carousel/Carousel';
import GreenButton from '../components/GreenBtn';
import RedButton from '../components/RedBtn';
import NeutralButton from '../components/NeutralBtn';



export const Startpage = () => {
  return (
    <>
      <p>Startpage is working</p>
      <CarouselSlider />
      <GreenButton></GreenButton>
      <RedButton></RedButton>
      <NeutralButton></NeutralButton>
    </>
  );
};