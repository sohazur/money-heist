import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  // Counting number of selected characters
  const characterCount = cart.length;
  let totalPrice = 0;
  // Calculating total price
  for (const character of cart) {
    totalPrice += character.price;
  }
  return (
    <div>
      <h2>Player(s) Selected: {characterCount}</h2>
      <h4>Total Price: ${totalPrice}</h4>
      {/* Showing all the selected character in UI */}
      {cart.map((character) => (
        <div
          className="show-name w-50 mx-auto mb-2"
          key={character.id * Math.random()}
        >
          {character.aliasName}
        </div>
      ))}
    </div>
  );
};

export default Cart;
