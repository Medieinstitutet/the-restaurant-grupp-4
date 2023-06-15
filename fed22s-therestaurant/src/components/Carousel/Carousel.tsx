import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import foodprepp from "./../../assets/photos/foodprepp.jpg"
import table from "./../../assets/photos/table.jpg"


const CarouselSlider = () => {
    return (

        <Carousel autoPlay interval={2000} infiniteLoop showThumbs={false} >
            <img src={foodprepp} alt="Prepping food" />
            <img src={table} alt="Serving" />
        </Carousel>

    );
};

export default CarouselSlider;
