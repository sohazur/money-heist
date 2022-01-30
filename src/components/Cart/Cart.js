import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  const characterCount = cart.length;
  let totalPrice = 0;
  for (const character of cart) {
    totalPrice += character.price;
  }
  return (
    <div>
      <h1>Player(s) Selected: {characterCount}</h1>
      <h4>Total Price: ${totalPrice}</h4>
      <ol>
        {cart.map((character) => (
          <li key={character.id * Math.random()}>{character.aliasName}</li>
        ))}
      </ol>
    </div>
  );
};

export default Cart;
