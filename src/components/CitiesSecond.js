import React from "react";
import "./css/carosel.css";

export default function CitiesSecond() {
  return (
    <div className="citiesPicBtn">
      <div className="picCityRow">
        <button>
          <div className="cityPic" id="city5">
            <h2 style={{ backgroundColor: "white" }}>{city1}</h2>
          </div>
        </button>
        <button>
          <div className="cityPic" id="city6">
            <h2 style={{ backgroundColor: "white" }}>{city2}</h2>
          </div>
        </button>
      </div>
      <div className="picCityRow">
        <button>
          <div className="cityPic" id="city7">
            <h2 style={{ backgroundColor: "white" }}>{city3}</h2>
          </div>
        </button>
        <button>
          <div className="cityPic" id="city8">
            <h2 style={{ backgroundColor: "white" }}>{city4}</h2>
          </div>
        </button>
      </div>
    </div>
  );
}

const city1 = "Paris";
const city2 = "Rome";
const city3 = "Berlin";
const city4 = "New-york";
