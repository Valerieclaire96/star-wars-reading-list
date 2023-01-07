import React, { useContext } from "react";
import "../../styles/homecard.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const HomeCard = (props) => {
  const { store, actions } = useContext(Context);
  const history = useNavigate();
  console.log(props);

  console.log(store.item);
  const learnMoreDescription = () => {
    if (props.character) {
      actions.setItem(props.character.url);
      history(`description/${props.character.uid}`);
    } else if (props.planet) {
      actions.setItem(props.planet.url);
      history(`/description/${[props.planet.uid]}`);
    } else if (props.vehicle) {
      actions.setItem(props.vehicle.url);
      history(`/description/${[props.vehicle.uid]}`);
    }
  };

  return (
    <div className="card-container">
      {props.character ? (
        <h4 className="card-name">{props.character.name}</h4>
      ) : props.planet ? (
        <h4 className="card-name">{props.planet.name}</h4>
      ) : props.vechicle ? (
        <h4 className="card-name">{props.vehicle.name}</h4>
      ) : null}
      <button onClick={learnMoreDescription} className="learn-more-button">
        Learn More
      </button>
    </div>
  );
};
