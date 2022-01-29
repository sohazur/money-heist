import React from "react";
import "./Character.css";
const Character = () => {
  const data = [
    {
      name: "Alvaro Morte",
      aliasName: "The Professor",
      age: 50,
      occupation: "Robber",
      firstAppearance: "Do as Planned (2017)",
      img: "https://upload.wikimedia.org/wikipedia/en/d/d5/Professor_%28Money_Heist%29.jpg",
    },
    {
      name: "Silene Oliveira",
      aliasName: "Tokyo",
      age: 29,
      occupation: "Robber",
      firstAppearance: "Do as Planned (2017)",
      img: "https://upload.wikimedia.org/wikipedia/en/d/dc/Tokyo_%28Money_Heist%29.jpg",
    },
    {
      name: "Andrés de Fonollosa",
      aliasName: "Berlin",
      age: 48,
      occupation: "Larcenist, cracksman",
      firstAppearance: "Do as Planned (2017)",
      img: "https://upload.wikimedia.org/wikipedia/en/4/45/Berlin_%28Money_Heist%29.jpg",
    },
    {
      name: "Ágata Jiménez",
      aliasName: "Nairobi",
      age: 37,
      occupation: "Robber",
      firstAppearance: "Do as Planned (2017)",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Wandgem%C3%A4lde_Alba_Flores_-_Nairobi_-_Venloer_Stra%C3%9Fe_274%2C_K%C3%B6ln-Ehrenfeld-7360.jpg/440px-Wandgem%C3%A4lde_Alba_Flores_-_Nairobi_-_Venloer_Stra%C3%9Fe_274%2C_K%C3%B6ln-Ehrenfeld-7360.jpg",
    },
    {
      name: "Miguel Herrán",
      aliasName: "Rio",
      age: 25,
      occupation: "Actor",
      firstAppearance: "La Casa De Papel",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Festival_de_M%C3%A1laga_2020_-_Miguel_Herr%C3%A1n-2.jpg/440px-Festival_de_M%C3%A1laga_2020_-_Miguel_Herr%C3%A1n-2.jpg",
    },
    {
      name: "Jaime Lorente López",
      aliasName: "Denver",
      age: 30,
      occupation: "Actor, Model",
      firstAppearance: "La Casa De Papel",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Festival_de_cinema_de_Sitges_2018_%2845178829451%29_%28cropped%29.jpg/440px-Festival_de_cinema_de_Sitges_2018_%2845178829451%29_%28cropped%29.jpg",
    },
  ];
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
