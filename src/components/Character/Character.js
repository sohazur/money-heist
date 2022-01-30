import React from "react";
import "./Character.css";
const Character = (props) => {
  const {
    id,
    name,
    aliasName,
    age,
    occupation,
    firstAppearance,
    img,
    handleTrack,
  } = props;
  return (
    <div className="col-4 g-3 d-flex align-items-stretch">
      <div className="card custom-card">
        <img src={img} className="card-img-top w-75 m-auto" alt="..." />
        <div className="card-body">
          <h1 className="card-title">{aliasName}</h1>
          <h3>Real Name: {name}</h3>
          <h3>Age: {age}</h3>
          <h3>Occupation: {occupation}</h3>
          <h3>Debut: {firstAppearance}</h3>
          <button onClick={() => handleTrack(props)} className="btn btn-custom">
            Use This Character
          </button>
        </div>
      </div>
    </div>
  );
};

export default Character;