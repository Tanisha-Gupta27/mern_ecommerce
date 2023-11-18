import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { HomeCarouselData } from "./HomeCarouselData";

const HomeCarousel = () => {

  const responsive = {
    1024: { items: 1 },
    1440: { items: 2 },
    1920: { items: 3 },
  };

  const items = HomeCarouselData.map((item) => <img className='cursor-pointer' src={item.image}/>);

  return (
    <>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableButtonsControls
        autoPlay
        autoPlayInterval={4000}
        infinite
    />
    </>
  )
};

export default HomeCarousel;
