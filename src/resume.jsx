import React from "react";
import ReactDOM from "react-dom/client";
import "./resume.css";
import Ticon from "../src/assets/T.png";
import Micon from "../src/assets/@.png";
import man from "../src/assets/foto.jpg";
export default function Resume(props) {
  console.log(props);
  return (
    <div>
      <div className="resume">
        <div className="piradi-info-1">
          <h1 className="saxeli">{props.name + props.lastName}</h1>
          <h3>
            <img className="icon" src={Micon} alt="" />
            {props.meili}
          </h3>
          <h3>
            <img className="icon" src={Ticon} alt="" />
            {props.telefoni}
          </h3>
          <p className="chemsShesaxeb">{props.chemsShesaxeb}</p>
        </div>
        <img className="piradi-foto" src={man} alt="" />
      </div>
    </div>
  );
}
