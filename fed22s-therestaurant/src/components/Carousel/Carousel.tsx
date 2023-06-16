import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import foodprepp from "./../../assets/photos/foodprepp.jpg"
import table from "./../../assets/photos/table.jpg"
import tables from "./../../assets/photos/tables.jpg"
import outside from "./../../assets/photos/outsidebywater.jpg"
import closeupfood from "./../../assets/photos/closeupfood.jpg"
import "./carousel.scss";


const CarouselSlider = () => {
    return (

        <Carousel autoPlay interval={2000} infiniteLoop showThumbs={false} >
            <img src={foodprepp} alt="Prepping food" />
            <img src={table} alt="Serving" />
            <img src={tables} alt="tables" />
            <img src={outside} alt="outside" />
            <img src={closeupfood} alt="closeupfood" />
        </Carousel>

    );
};

export default CarouselSlider;
