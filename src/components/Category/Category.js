import React from "react";
import Character from "../Character/Character";
import "./Category.css";
const Category = () => {
  return (
    <div className="container">
      <div className="row">
        <Character></Character>
        <div className="col-3">
          <h2>Cart</h2>
        </div>
      </div>
    </div>
  );
};

export default Category;
