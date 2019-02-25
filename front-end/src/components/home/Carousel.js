import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel(props){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }   
    return(
        <Slider {...settings}>
            <div className="slick-image"><img src="/images/homepage1_1.jpg" /></div>
            <div className="slick-image"><img src="/images/homepage1_2.jpg" /></div>
            <div className="slick-image"><img src="/images/homepage1_3.jpg" /></div>
        </Slider>
    )
}
export default Carousel;