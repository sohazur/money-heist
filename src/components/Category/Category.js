import React, { useEffect, useState } from "react";
import Character from "../Character/Character";
import "./Category.css";
const Category = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch("./characterDb.JSON")
      .then((res) => res.json())
      .then((data) => setCharacters(data));
  }, []);
  console.log(characters);
  return (
    <div className="container">
      <div className="row">
        {characters.map((character) => (
          <Character
            key={Math.random() * 100}
            img={character.img}
            name={character.name}
            aliasName={character.aliasName}
            firstAppearance={character.firstAppearance}
            age={character.age}
            occupation={character.occupation}
          ></Character>
        ))}
        <div>
          <h2>Cart</h2>
        </div>
      </div>
    </div>
  );
};

export default Category;
