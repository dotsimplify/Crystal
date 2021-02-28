import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import img from "./images/saas.jpg";
import img2 from "./images/shop.jpg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      centerMode: true,
      centerPadding: "60px",
      slidesToShow: 3,
      autoplay: true,
      arrows: false,
      accessibility: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <div className="bg-pink-200 ">
        <h2> Single Item</h2>
        <Slider {...settings} className="">
          <div>
            <img
              src={img}
              alt=""
              className="h-64 w-full border-2 border-blue-200"
            />
          </div>
          <div>
            <img
              src={img2}
              alt=""
              className="h-64 w-full border-2 border-blue-200"
            />
          </div>
          <div>
            <img
              src={img}
              alt=""
              className="h-64 w-full border-2 border-blue-200"
            />
          </div>
          <div>
            <img
              src={img2}
              alt=""
              className="h-64 w-full border-2 border-blue-200"
            />
          </div>
          <div>
            <img
              src={img}
              alt=""
              className="h-64 w-full border-2 border-blue-200"
            />
          </div>
          <div>
            <img
              src={img2}
              alt=""
              className="h-64 w-full border-2 border-blue-200"
            />
          </div>
          <button type="button" className="slick-next text-blue-600">
            Next
          </button>
        </Slider>
      </div>
    );
  }
}
