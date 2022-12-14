import React from "react";
import Slider from "react-slick";

export default function Informationslick() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <img src="/images/arrow-right-left.png" />,
    prevArrow: <img src="/images/arrow-rightpersonal.png" />,
  };
  return (
    <div>
      <Slider {...settings} className="personalslick">
        <div>
          <p className=" text-white f-f-li text-sm 2xl:text-tiny text-center  ">
            {" "}
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum”
          </p>
          <h2 className=" f-f-b text-white text-base 2xl:text-xl mt-4 ">
            John Doe
          </h2>
          <h2 className=" f-f-it text-white text-sm 2xl:text-base  ">
            Personal Trainer
          </h2>
        </div>
        <div>
          <p className=" text-white f-f-li text-sm 2xl:text-tiny text-center  ">
            {" "}
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum”
          </p>
          <h2 className=" f-f-b text-white text-base 2xl:text-xl mt-4 ">
            John Doe
          </h2>
          <h2 className=" f-f-it text-white text-sm 2xl:text-base ">
            Personal Trainer
          </h2>
        </div>
        <div>
          <p className=" text-white f-f-li text-sm 2xl:text-tiny text-center  ">
            {" "}
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum”
          </p>
          <h2 className=" f-f-b text-white text-base 2xl:text-xl mt-4 ">
            John Doe
          </h2>
          <h2 className=" f-f-it text-white text-sm 2xl:text-base ">
            Personal Trainer
          </h2>
        </div>
      </Slider>
    </div>
  );
}
