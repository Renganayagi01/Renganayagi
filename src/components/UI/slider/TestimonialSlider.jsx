import React from 'react';
import Slider from "react-slick";

import ava01 from '../../../assets/fake-data/Images/ava-1.jpg';
import ava02 from '../../../assets/fake-data/Images/ava-2.jpg';
import ava03 from '../../../assets/fake-data/Images/ava-3.jpg';
import '../../../styles/slider.css';

const TestimonialSlider = () => {

    const settings ={
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1

    }
  return (
  <Slider {...settings}>
      <div>
        <p className="review__text">
          "It is a good experience using Tasty Service when can order any food from different restaurants. 
          Then delivery boys can delivery the food at our home. 
          Delivery boys have an good behavior and they can delivered food with in time.!"
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Jhon Doe</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "i like Tasty Treat services as it provides on time delivery.
           delivery boy are also kind and generous.customer support is good.
           they also provide refunds on food that gets sploit are returned products!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Mitchell Marsh</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Searching for places to eat and ordering online is quick and easy. Keeping a history of earlier visits and favourite places is nice.
           Sometimes the app doesnt detect the location correctly but that can be fixed with a little manual entry. 
           Ability to filter by type of cuisine, dine in or take away etc is good.
           The new food category filter is very good. The ordering process has become easier.!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Steven Crock</h6>
        </div>
      </div>
    </Slider>
  );
};
    

export default TestimonialSlider