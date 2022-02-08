import React, { Component } from "react";
import InformationCard from "../InformationCard";
import "./style.css";



export default class WeatherCard extends Component {

  state = {
    ...this.props.data,
    viewType: "C",
  };

  getLastUpdatedTime = () => {
    let time = new Date(this.props.data.dt).toLocaleTimeString();
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
    let windSpeed = this.props.data.wind.speed;
    let gust = this.props.data.wind.gust;
    let angle = this.props.data.wind.deg
    return `${windSpeed} m/s at ${angle} degree`
  }

  render() {
    return (
      <div className="card">
        <div className="row">
          <div className="city">
            <div className="large-text color-blue">{this.props.data.name}</div>
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
                src={`http://openweathermap.org/img/w/${this.props.data.weather[0].icon}.png`}
              />
            </div>
            <div className="summary-temp">
              <div className="color-green">{this.convertTo(this.props.data.main.temp).toFixed(2)} {this.state.viewType}</div>
              <div className="small-text">{this.props.data.weather[0].description}</div>
            </div>
          </div>
          <div className="section">
            <div>{this.props.data.weather[0].main}</div>
            <div>
              Feels Like: {" "}
              {this.convertTo(this.props.data.main.feels_like).toFixed(2)} {this.state.viewType}
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
              value={`${this.props.data.main.humidity} %`}
            />
          </div>
          <div className="item">
            <InformationCard
              name="Visibility"
              value={`${this.props.data.visibility} M`}
            />
          </div>
          <div className="item">
            <InformationCard
              name="Pressure"
              value={`${this.props.data.main.pressure} mb`}
            />
          </div>
          <div className="item">
            <InformationCard
              name="Min / Max"
              value={`${this.convertTo(this.props.data.main.temp_min).toFixed(
                1
              )} ${this.state.viewType} / ${this.convertTo(this.props.data.main.temp_max).toFixed(1)} ${this.state.viewType}`}
            />
          </div>
        </div>
      </div>
    );
  }
}
