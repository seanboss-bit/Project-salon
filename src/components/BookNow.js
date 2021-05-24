import SelectService from "./booknow component/SelectService";
import SelectStylist from "./booknow component/SelectStylist";
import Success from "./booknow component/Success";
import InitalizeUser from "./booknow component/InitializeUser";

import React, { Component } from "react";

export class BookNow extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  };
  // Proceed to next Step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  // Previous Step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle CHange
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <SelectService
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        break;
      case 2:
        return <h1>Select Stylist</h1>;
        break;
      case 3:
        return <h1>initialize User</h1>;
        break;
      case 4:
        return <h1>Success</h1>;
        break;
      default:
        break;
    }
  }
}

export default BookNow;
