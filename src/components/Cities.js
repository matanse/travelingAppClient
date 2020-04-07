import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CitiesFirst from "./CitiesFirst";
import CitiesSecond from "./CitiesSecond";
import CitiesThird from "./CitiesThird";
import "./css/cities.css";

export default class Cities extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h3>Popular MYtineraries</h3>
        <Carousel>
          <div>
            <CitiesFirst />
          </div>
          <div>
            <CitiesSecond />
          </div>
          <div>
            <CitiesThird />
          </div>
        </Carousel>
      </div>
    );
  }
}
