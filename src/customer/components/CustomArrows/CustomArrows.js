import * as React from "react";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa6"


const CustomLeftArrow = ({ onClick }) => (
  <i onClick={() => onClick()} />
);
const CustomRightArrow = ({ onClick }) => {
  return <i onClick={() => onClick()}/>;
};

const CustomButtonGroup = ({ next, previous, goToSlide, carouselState, arrow, btn }) => {
  const { totalItems, currentSlide } = carouselState;
  return (
    <div className={arrow}>
      {/* <div>Current slide is {currentSlide}</div> */}
      <button onClick={() => previous()} className={btn}><FaAngleLeft/></button>
      <button onClick={() => next()} className={btn}><FaAngleRight/></button>
      {/* <button
        onClick={() => goToSlide(Math.floor(Math.random() * totalItems + 1))}
      >
        Go to a random slide
      </button> */}
      </div>
  );
};
const CustomButtonGroupAsArrows = ({ next, previous }) => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h4>These buttons can be positioned anywhere you want on the screen</h4>
      <button onClick={previous}>Prev</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export {
  CustomLeftArrow,
  CustomRightArrow,
  CustomButtonGroup,
  CustomButtonGroupAsArrows,
};