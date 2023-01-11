import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import { HomeCard } from "../component/HomeCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("characters")) &&
      JSON.parse(localStorage.getItem("planets")) &&
      JSON.parse(localStorage.getItem("vehicles"))
    ) {
      setCharacters(JSON.parse(localStorage.getItem("characters")));
      setPlanets(JSON.parse(localStorage.getItem("planets")));
      setVehicles(JSON.parse(localStorage.getItem("vehicles")));
    } else {
      fetch("https://swapi.tech/api/people")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setCharacters(data.results);
          localStorage.setItem("characters", JSON.stringify(data.results));
        });
      fetch("https://swapi.tech/api/planets")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setPlanets(data.results);
          localStorage.setItem("planets", JSON.stringify(data.results));
        });
      fetch("https://swapi.tech/api/vehicles")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setVehicles(data.results);
          localStorage.setItem("vehicles", JSON.stringify(data.results));
        });
    }
  }, []);

  // console.log(store.item);
  // const learnMoreDescription = () => {
  //   if (props.character) {
  //     actions.setItem(props.character.url);
  //     history(`description/${props.character.uid}`);
  //   } else if (props.planet) {
  //     actions.setItem(props.planet.url);
  //     history(`/description/${[props.planet.uid]}`);
  //   } else if (props.vehicle) {
  //     actions.setItem(props.vehicle.url);
  //     history(`/description/${[props.vehicle.uid]}`);
  //  } }
  // };

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
      <h2 className="vehicles-title">Vehicles</h2>
      <div className="vehicles-container">
        {vehicles.length
          ? vehicles.map((vehicle) => {
              return <HomeCard vehicle={vehicle} />;
            })
          : null}
      </div>
    </div>
  );
};
