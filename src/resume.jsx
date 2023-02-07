import React from "react";
import ReactDOM from "react-dom/client";
import "./resume.css";
import Ticon from "../src/assets/T.png";
import Micon from "../src/assets/@.png";
import man from "../src/assets/foto.jpg";
export default function Resume(props) {
  let someVar = false;
  const namee = JSON.parse(window.localStorage.getItem("name"));
  const lastnamee = JSON.parse(window.localStorage.getItem("lastname"));
  const meilii = JSON.parse(window.localStorage.getItem("meili"));
  const telefonii = JSON.parse(window.localStorage.getItem("telefoni"));
  const chemsShesaxebb = JSON.parse(
    window.localStorage.getItem("chemsShesaxeb")
  );
  const filee = JSON.parse(window.localStorage.getItem("file"));

  console.log(lastnamee);
  if (chemsShesaxebb === "") someVar = true;
  else someVar = false;
  // console.log(props);
  return (
    <div className="resume">
      <div className="piradi-info-1">
        <div>
          <h1 className="saxeli">{namee + " " + lastnamee}</h1>
          <h3>
            <img className="icon" src={Micon} alt="" />
            {meilii}
          </h3>
          <h3>
            <img className="icon" src={Ticon} alt="" />
            {telefonii}
          </h3>
          <h3 className="saxeli">{someVar ? "" : "ჩემს შესახებ"}</h3>
          <p className="chemsShesaxeb">{chemsShesaxebb}</p>
        </div>
        <div>
          <img className="piradi-foto" src={filee} alt="" />
        </div>
      </div>

      <div className="gamocdileba">
        <h4>{props.tanamdeboba + "," + props.damsaqmebeli}</h4>
      </div>
    </div>
  );
}
