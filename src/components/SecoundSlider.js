import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {locations} from './Data'
import './SlidingComp.css'

function SecoundSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3
      };
    
      return (
        <>
          <h1 className='titleName'>Plan a trip with help from local Hosts around the world</h1>
          <div className='Nmae'>
          <Slider {...settings}>
          {locations.map((item) =>(
                 <div className='card'>
                 <div className='card-top' id='card-top'>
                    <img src={item.url} alt="image is loading"/>
                 </div>
             </div>
            ))}
          </Slider>
        </div>
        <h1 className='titleName'>Top Destination</h1>
          <div className='Nmae'>
          <Slider {...settings}>
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

export default SecoundSlider