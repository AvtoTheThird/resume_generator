import React from "react";
import ReactDOM from "react-dom/client";
import "./resume.css";
import Ticon from "../src/assets/T.png";
import Micon from "../src/assets/@.png";
import man from "../src/assets/foto.jpg";
export default function Resume() {
  let someVar = false;
  let someVar1 = false;

  const namee = JSON.parse(window.localStorage.getItem("name"));
  const lastnamee = JSON.parse(window.localStorage.getItem("lastname"));
  const meilii = JSON.parse(window.localStorage.getItem("meili"));
  const telefonii = JSON.parse(window.localStorage.getItem("telefoni"));
  const chemsShesaxebb = JSON.parse(
    window.localStorage.getItem("chemsShesaxeb")
  );
  const filee = JSON.parse(window.localStorage.getItem("file"));
  const tanamdebobaa = JSON.parse(window.localStorage.getItem("tanamdeboba"));
  const damsaqmebelii = JSON.parse(window.localStorage.getItem("damsaqmebeli"));
  const dawyebaa = JSON.parse(window.localStorage.getItem("dawyeba"));
  const damtavrebaa = JSON.parse(window.localStorage.getItem("damtavreba"));
  const agweraa = JSON.parse(window.localStorage.getItem("agwera"));

  // console.log(dawyebaa);
  if (chemsShesaxebb === "") someVar = true;
  else someVar = false;

  if (tanamdebobaa === "") someVar = true;
  else someVar1 = false;
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
        <h3 className="saxeli">{someVar ? "" : "გამოცდილება"}</h3>

        <h4 style={{ margin: "0px" }}>
          {tanamdebobaa + ",  " + damsaqmebelii}
        </h4>
        <i style={{ color: "#909090" }}>{dawyebaa + " - " + damtavrebaa}</i>
        <p style={{ padding: "8px" }}>{agweraa}</p>
      </div>
    </div>
  );
}
