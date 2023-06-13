import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselSlider = () => {
    return (
        <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false}>

        </Carousel>
    );
};

export default CarouselSlider;
