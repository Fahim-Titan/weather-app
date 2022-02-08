import React, { Component } from "react";
import InformationCard from "../InformationCard";
import "./style.css";
export default class WeatherCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="row">
          <div className="city">
            <div className="large-text color-blue">City Name</div>
            <div className="small-text color-green">Last updated</div>
          </div>
          <div className="temparature"> C | F </div>
        </div>
        <div className="row">
          <div className="summary-weather">
            <div className="weather-icon">icon</div>
            <div className="summary-temp">
              <div>Temp</div>
              <div>Weather Descriptions</div>
            </div>
          </div>
          <div className="section">
            <div>weather main</div>
            <div>Feels Like</div>
          </div>
        </div>
        <div className="row">
          <div className="item"><InformationCard name="Wind" value={10}/></div>
          <div className="item"><InformationCard name="Humidity" value={10}/></div>
          <div className="item"><InformationCard name="Visibility" value={10}/></div>
          <div className="item"><InformationCard name="pressure" value={10}/></div>
          <div className="item"><InformationCard name="Min / max" value={10}/></div>
        </div>
      </div>
    );
  }
}
