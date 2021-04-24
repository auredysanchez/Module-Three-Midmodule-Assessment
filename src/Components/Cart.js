import React from "react";
import formatPrice from "../helpers/formatPrice";

function Cart({ cart, subtotal, tax, total}) {
  return (
    <section className="Cart">
      <h1>Cart</h1>
      <ul>
        {cart.map((product) => {
          const { name, price, id } = product;
          return (
            <li key={id}>
              {name}: {formatPrice(price)}
            </li>
          );
        })}
      </ul>
      <h2>Subtotal: {formatPrice(subtotal)}</h2>
      <h2>Tax: {formatPrice(tax)}</h2>
      <h2>Total: {formatPrice(total)} </h2>
    </section>
  );
}

export default Cart;
