import React, { Component } from "react";

export default class SearchForm extends Component {
  state = {
    city: "",
  };

  handleChange = (e) => {
    this.setState({ city: e.target.value });
  };

  searchBtnClicked = (e) => {
    e.preventDefault();
    console.log(this.state.city);
  };
  render() {
    return (
      <div>
        <form>
          Choose a City:

          <select name="city" id="city" onChange={this.handleChange}>
            <option value="Vancouver, Canada">Vancouver, Canada</option>
            <option value="Toronto, Canada">Toronto, Canada</option>
            <option value="New York, USA">New York, USA</option>
          </select>
          <input
            type="submit"
            value={"Search"}
            onClick={this.searchBtnClicked}
          />
        </form>
      </div>
    );
  }
}
