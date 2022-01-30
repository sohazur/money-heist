import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Character from "../Character/Character";
import "./Category.css";
const Category = () => {
  const [characters, setCharacters] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("./characterDb.JSON")
      .then((res) => res.json())
      .then((data) => setCharacters(data));
  }, []);

  const handleTrack = (character) => {
    const newCart = [...cart, character];
    setCart(newCart);
  };
  return (
    <div className="container d-flex">
      <div className="w-75">
        <div className="row">
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
              handleTrack={handleTrack}
            ></Character>
          ))}
        </div>
      </div>
      <div>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Category;
