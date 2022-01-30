import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Character from "../Character/Character";
import "./Category.css";
const Category = () => {
  // usestates
  const [characters, setCharacters] = useState([]);
  const [cart, setCart] = useState([]);
  // useEffect to laod data
  useEffect(() => {
    fetch("./characterDb.JSON")
      .then((res) => res.json())
      .then((data) => setCharacters(data));
  }, []);

  // Function for tracking which character is being selected
  const handleTrack = (character) => {
    const newCart = [...cart, character];
    setCart(newCart);
  };
  return (
    <div className="container d-flex my-5">
      <div className="w-75">
        <div className="row">
          {/* Generating all the characters from DB */}
          {characters.map((character) => (
            <Character
              key={character.id}
              id={character.id}
              img={character.img}
              name={character.name}
              aliasName={character.aliasName}
              firstAppearance={character.firstAppearance}
              age={character.age}
              occupation={character.occupation}
              price={character.price}
              handleTrack={handleTrack}
            ></Character>
          ))}
        </div>
      </div>
      <div>
        {/* Component for Cart */}
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Category;
