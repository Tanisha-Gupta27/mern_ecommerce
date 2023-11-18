import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MensKurta } from "../../../data/MensKurta";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import {
  CustomLeftArrow,
  CustomRightArrow,
  CustomButtonGroup,
} from "../CustomArrows/CustomArrows";
import { homeArrows, homeArrowsBtn} from "../CustomArrows/CustomArrowsCss";

const HomeSectionCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="relative p-5">
        <Carousel
          responsive={responsive}
          infinite={true}
          keyBoardControl={true}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          customButtonGroup={<CustomButtonGroup arrow={homeArrows} btn={homeArrowsBtn}/>}
          renderButtonGroupOutside={true}
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          customTransition={"transform 800ms ease-in-out"}
        >
          {MensKurta.slice(0, 10).map((item) => (
            <HomeSectionCard product={item} />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default HomeSectionCarousel;
