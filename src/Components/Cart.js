import React from "react";
import formatPrice from "../helpers/formatPrice";

function Cart({ cart, subtotal, tax, total}) {
  return (
    <section>
      <h2>Cart</h2>
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
      <h3>Subtotal: {formatPrice(subtotal)}</h3>
      <h3>Tax: {formatPrice(tax)}</h3>
      <h3>Total: {formatPrice(total)} </h3>
    </section>
  );
}

export default Cart;
