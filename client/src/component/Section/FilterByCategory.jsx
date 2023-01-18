import React, { Component } from "react";
import Checkbox from "../Checkbox/Checkbox";
import { Lawyers } from "../../sidder";
import HomeLawyer from "../cards/HomeLawyer";


export default class FilterByCategory extends Component {

  state = {
    lawyers: this.props.lawyers,
    // lawyers: {(this.props.lawyers).length >0 : this.props.lawyers : Lawyers},
    categories: {
      available: false,
      rate: 0,
      location: "",
      price: 0,
      avgTime: 0,
      experience: 0,
    },
  };

  handleChange = (e) => {
    const { name } = e.target;

    this.setState((prevState) => {
      return {
        categories: {
          ...prevState.categories,
          [name]: !prevState.categories[name],
        },
      };
    });
  };

  render() {
    const checkedLawyers = Object.entries(this.state.categories)
    // result.filter((lawyer) =>
    //         lawyer.available === true &&
    //         lawyer.rate === rate &&
    //         lawyer.location === location &&
    //         lawyer.price === price &&
    //         lawyer.experience === experience &&
    //         lawyer.avgTime === avgTime
    //         )
      .filter((category) => category[1])
      .map((category) => category[0]);
    const filteredLawyers = this.state.lawyers.filter(({ lawyer }) =>
      checkedLawyers.includes(lawyer)
    );

    return (
      // <div className="div"   onClick={sendToCookies}>
      <div className="div">
        <h2>All the lawyers shown here are available!</h2>
        <Checkbox
          id="1"
          title="price"
          name="price"
          checked={this.state.categories.price}
          handleChange={this.handleChange}
        />
        <Checkbox
          id="2"
          title="rate"
          name="rate"
          handleChange={this.handleChange}
          checked={this.state.categories.rate}
        />
        <Checkbox
          id="3"
          title="location"
          name="location"
          handleChange={this.handleChange}
          checked={this.state.categories.location}
        />
        <Checkbox
          id="4"
          title="experience"
          name="experience"
          handleChange={this.handleChange}
          checked={this.state.categories.experience}
        />
        <Checkbox
          id="5"
          title="avgTime"
          name="avgTime"
          handleChange={this.handleChange}
          checked={this.state.categories.avgTime}
        />
        <HomeLawyer
          lawyers={
            filteredLawyers.length === 0 ? this.state.lawyers : filteredLawyers
          }
        />
      </div>
    );
  }
}
