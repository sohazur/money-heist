import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  console.log(cart);
  let selectedCharacters = [];
  for (const character of cart) {
    if (character) {
      selectedCharacters.push(character);
    }
  }
  console.log(selectedCharacters);
  return (
    <div>
      <h1>Selected Player(s)</h1>
      <ol>
        {selectedCharacters.map((character) => (
          <li key={character.id * Math.random()}>{character.aliasName}</li>
        ))}
      </ol>
    </div>
  );
};

export default Cart;
