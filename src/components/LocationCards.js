import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {locations} from './Data'
import './SlidingComp.css'

function LocationCards() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows : true
  };

  return (
    <>
      <h1 className='titleName'>New In This Week..</h1>
      <div className='Nmae'>
      <Slider {...settings} style={{padding : 24}}>
      {locations.map((item) =>(
             <div className='card'>
             <div className='card-top' id='card-top'>
                <img src={item.url} alt="image is loading"/>
             </div>
         </div>
        ))}
      </Slider>
    </div>
    </>
  )
}

export default LocationCards