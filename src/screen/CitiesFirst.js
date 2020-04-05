import React from "react";

export default function CitiesFirst() {
  return (
    <div className="citiesPicBtn">
      <div className="picCityRow">
        <button>
          <h2 className="cityPic" id="city1">
            {city1}
          </h2>
        </button>
        <button>
          <h2 className="cityPic" id="city2">
            {city2}
          </h2>
        </button>
      </div>
      <div className="picCityRow">
        <button>
          <h2 className="cityPic" id="city3">
            {city3}
          </h2>
        </button>
        <button>
          <h2 className="cityPic" id="city4">
            {city4}
          </h2>
        </button>
      </div>
    </div>
  );
}

const city1 = "Paris";
const city2 = "Rome";
const city3 = "Berlin";
const city4 = "New-york";
