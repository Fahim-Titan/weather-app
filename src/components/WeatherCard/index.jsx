import React, { Component } from "react";
import InformationCard from "../InformationCard";
import "./style.css";

const data = {
  coord: {
    lon: -79.4163,
    lat: 43.7001,
  },
  weather: [
    {
      id: 804,
      main: "Clouds",
      description: "overcast clouds",
      icon: "04n",
    },
  ],
  base: "stations",
  main: {
    temp: 271.74,
    feels_like: 271.74,
    temp_min: 270.4,
    temp_max: 272.68,
    pressure: 1015,
    humidity: 82,
  },
  visibility: 10000,
  wind: {
    speed: 0.89,
    deg: 234,
    gust: 3.13,
  },
  clouds: {
    all: 93,
  },
  dt: 1644292906,
  sys: {
    type: 2,
    id: 2010632,
    country: "CA",
    sunrise: 1644236840,
    sunset: 1644273380,
  },
  timezone: -18000,
  id: 6167865,
  name: "Toronto",
  cod: 200,
};

export default class WeatherCard extends Component {
  state = {
    ...data,
    viewType: "C",
  };

  getLastUpdatedTime = () => {
    let time = new Date(this.state.dt).toLocaleTimeString();
    return time;
  };

  convertTo = (value) => {
    if (this.state.viewType === "C") {
      return value - 273.15;
    } else {
      return value * 1.8 - 459.67;
    }
  };

  changeTempType = (type) => {
    this.setState({
      viewType: type,
    });
  };

  displayWind = () => {
    let windSpeed = this.state.wind.speed;
    let gust = this.state.wind.gust;
    let angle = this.state.wind.deg
    return `${windSpeed} m/s at ${angle} degree`
  }

  render() {
    return (
      <div className="card">
        <div className="row">
          <div className="city">
            <div className="large-text color-blue">{this.state.name}</div>
            <div className="small-text color-green">
              Last Updated: {this.getLastUpdatedTime()}
            </div>
          </div>
          <div className="temparature">
            <button className="button" onClick={() => this.changeTempType("C")}>
              {" "}
              C{" "}
            </button>{" "}
            |
            <button className="button" onClick={() => this.changeTempType("F")}>
              {" "}
              F{" "}
            </button>
          </div>
        </div>
        <div className="row">
          <div className="summary-weather">
            <div className="weather-icon">
              <img
                src={`http://openweathermap.org/img/w/${this.state.weather[0].icon}.png`}
              />
            </div>
            <div className="summary-temp">
              <div>{this.convertTo(this.state.main.temp).toFixed(2)} {this.state.viewType}</div>
              <div>{this.state.weather[0].description}</div>
            </div>
          </div>
          <div className="section">
            <div>{this.state.weather[0].main}</div>
            <div>
              Feels Like: {" "}
              {this.convertTo(this.state.main.feels_like).toFixed(2)} {this.state.viewType}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="item">
            <InformationCard
              name="Wind"
              value={this.displayWind()}
            />
          </div>
          <div className="item">
            <InformationCard
              name="Humidity"
              value={`${this.state.main.humidity} %`}
            />
          </div>
          <div className="item">
            <InformationCard
              name="Visibility"
              value={`${this.state.visibility} M`}
            />
          </div>
          <div className="item">
            <InformationCard
              name="Pressure"
              value={`${this.state.main.pressure} mb`}
            />
          </div>
          <div className="item">
            <InformationCard
              name="Min / Max"
              value={`${this.convertTo(this.state.main.temp_min).toFixed(
                1
              )} ${this.state.viewType} / ${this.convertTo(this.state.main.temp_max).toFixed(1)} ${this.state.viewType}`}
            />
          </div>
        </div>
      </div>
    );
  }
}
