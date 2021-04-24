import React, { Component } from "react";

import formatPrice from "../helpers/formatPrice";
import onlyNumbers from "../helpers/onlyNumbers"

class Checkout extends Component {
  
  state = {
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
    creditCard: "",
    
  };


    handleSubmit = (e) => {
        e.preventDefault()
        const { firstName, lastName, email, zipCode, creditCard } = this.state;
        const {total} = this.props
        // debugger
        if(!firstName || !lastName || !email) {
          window.alert("Input is not valid")
      } else if(creditCard.length !== 16 || onlyNumbers(creditCard)) {
        window.alert("Credit card number is not valid");
      } else if (zipCode.length !== 5 || onlyNumbers(zipCode)) {
        window.alert("Zip code is not valid");
      } else {
        window.alert(
          `Purchase complete
            Total:${formatPrice(total)}`);
      }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { firstName, lastName, email, zipCode, creditCard } = this.state;
    return (
      <section>
        <h1>Checkout</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            onChange={this.handleChange}
            value={firstName}
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            onChange={this.handleChange}
            value={email}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            onChange={this.handleChange}
            value={lastName}
          />
          <label htmlFor="zipCode">Zip Code</label>
          <input
            id="zipCode"
            name="zipCode"
            onChange={this.handleChange}
            value={zipCode}
          />
          <label htmlFor="creditCard">Credit Card</label>
          <input
            id="creditCard"
            name="creditCard"
            onChange={this.handleChange}
            value={creditCard}
          />
          <button>Buy Now</button>
        </form>
      </section>
    );
  }
}

export default Checkout;
