import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import { HomeCard } from "../component/HomeCard";

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCharacters(data.results);
      });
    fetch("https://www.swapi.tech/api/planets")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPlanets(data.results);
      });
    fetch("https://www.swapi.tech/api/vehicles")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setVehicles(data.results);
      });
  }, []);

  return (
    <div className="home-container">
      <h2 className="character-title">Characters</h2>
      <div className="characters-container">
        {characters.length
          ? characters.map((character) => {
              return <HomeCard character={character} />;
            })
          : null}
      </div>
      <h2 className="planet-title">Planets</h2>
      <div className="planets-container">
        {planets.length
          ? planets.map((planet) => {
              return <HomeCard planet={planet} />;
            })
          : null}
      </div>
      <h2 className="vehicles-title">vehicles</h2>
      <div className="vehicles-container">
        {vehicles.length
          ? vehicles.map((vehicle) => {
              return <HomeCard vehicles={vehicles} />;
            })
          : null}
      </div>
    </div>
  );
};
