import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Character.css";
const Character = (props) => {
  const {
    name,
    aliasName,
    age,
    occupation,
    firstAppearance,
    img,
    price,
    handleTrack,
  } = props;
  // Font Awesome Icon
  const iconAdd = <FontAwesomeIcon icon={faUserPlus} />;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 g-3 d-flex align-items-stretch character">
      <div className="card custom-card p-3">
        <img src={img} className="card-img-top w-75 m-auto" alt="..." />
        <div className="card-body d-flex flex-column">
          <h1 className="card-title">{aliasName}</h1>
          <h4>Real Name: {name}</h4>
          <h4>Age: {age}</h4>
          <h4>Occupation: {occupation}</h4>
          <h4>Debut: {firstAppearance}</h4>
          <h4>Price: ${price}</h4>
          <button
            onClick={() => handleTrack(props)}
            className="btn btn-custom mt-auto"
          >
            {iconAdd} Use This Character
          </button>
        </div>
      </div>
    </div>
  );
};

export default Character;
