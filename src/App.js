import "./App.css";
import React, { Component } from "react";
import Product from "./Components/Products";
import Cart from "./Components/Cart";
// import productData from "./data/productData";
import Checkout from "./Components/Checkout";

class App extends Component {
  state = { cart: [] };
  addProduct = (product) => {
    this.setState((prevState) => {
      return { cart: [product, ...prevState.cart] };
    });
  };
  render() {
    const { cart } = this.state;
    const subtotal = getSubtotal(cart)
    const tax = subtotal * .05
    const total = subtotal + tax
    return (
      <div>
        <h1>My Garage Sale</h1>
        <Product addProduct={this.addProduct} />
        <Cart cart={cart} subtotal= {subtotal} tax ={tax} total={total} />
        <Checkout total={total} />
      </div>
    );
  }
}

export default App;

const getSubtotal = (cart) => {
  let sum = 0;
  cart.forEach((item) => {
    sum += item.price;
  });
  return sum;
};
