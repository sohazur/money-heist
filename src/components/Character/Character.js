import React from "react";
import "./Character.css";
const Character = () => {
  return (
    <div className="col">
      <div className="card custom-card">
        <img src="" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button className="btn btn-custom">
            <a href="/player" className="">
              Go somewhere
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Character;
