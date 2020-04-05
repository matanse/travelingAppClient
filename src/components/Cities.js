import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CitiesFirst from "../screen/CitiesFirst";
import CitiesSecond from "../screen/CitiesSecond";
import CitiesThird from "../screen/CitiesThird";
import "./css/cities.css";

export default class Cities extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={CitiesFirst} />
          <Route path="/CitiesSecond" component={CitiesSecond} />
          <Route path="/CitiesThird" component={CitiesThird} />
        </div>
      </BrowserRouter>
    );
  }
}
