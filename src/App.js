import { data } from "./utils/default";
import React, { Component } from "react";
import apis from "./apis";
import './App.css';
import SearchForm from './components/SearchForm/SearchForm';
import WeatherCard from './components/WeatherCard';
const { REACT_APP_APPID } = process.env;

export default class App extends Component {
  componentDidMount() {
    this.getWeatherData("Vancouver, Canada");
  }

  state = {
    data: {...data}
  }

  getWeatherData = async (city) => {
    const res = await fetch(apis.weatherURL(REACT_APP_APPID, city))
    let weatherData = await res.json();
    this.setState({data: {...weatherData}})
    console.log(weatherData);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header large-text">
          Weather APP
        </header>
        <section className="App-main-section">
          <div className="search-section">
            <SearchForm onSubmit={(value) => this.getWeatherData(value)}/>
          </div>
          <WeatherCard data={this.state.data}/>
        </section>
        <footer className="App-footer">
          Made with care and love by 
          <span>
            <a href="https://www.linkedin.com/in/al-masum-fahim/">Al Masum Fahim</a>
          </span>
        </footer>
      </div>
    );
  }
}
