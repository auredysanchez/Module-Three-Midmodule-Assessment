import "./App.css";
import React, { Component } from "react";
import Product from "./Components/Products";
import Cart from "./Components/Cart";
// import productData from "./data/productData";
import Checkout from "./Components/Checkout"

class App extends Component {
  state = { cart: [] };
  addProduct = (product) => {
    this.setState((prevState) => {
      return { cart: [product, ...prevState.cart] };
    });
  };
  render() {
    const { cart } = this.state;
    return (
      <div>
        <h1>My Garage Sale</h1>
        <Product addProduct={this.addProduct} />
        {/* <Cart /> */}
        <Checkout />
      </div>
    );
  }
}

export default App;
