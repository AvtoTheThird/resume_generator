import { useState, useEffect } from "react";
import Resume from "../resume";
import "./sawyisi_gverdi.css";
import "../App.css";
import Insides from "./gamocdilebav2";
export default function Gamocdileba() {
  const tanamdebobaa = JSON.parse(window.localStorage.getItem("tanamdeboba"));
  const damsaqmebelii = JSON.parse(window.localStorage.getItem("damsaqmebeli"));
  const dawyebaa = JSON.parse(window.localStorage.getItem("dawyeba"));
  const damtavrebaa = JSON.parse(window.localStorage.getItem("damtavreba"));
  const agweraa = JSON.parse(window.localStorage.getItem("agwera"));

  const [tanamdeboba, setTanamdeboba] = useState(tanamdebobaa);
  const handleTanamdeboba = (event) => {
    setTanamdeboba(event.target.value);
  };

  const [damsaqmebeli, setDamsaqmebeli] = useState(damsaqmebelii);
  const handleDamsaqmebeli = (event) => {
    setDamsaqmebeli(event.target.value);
  };
  const [dawyeba, setDawyeba] = useState(dawyebaa);
  const handleDawyeba = (event) => {
    setDawyeba(event.target.value);
  };
  const [damtavreba, setDamtavreba] = useState(damtavrebaa);
  const handleDamtavreba = (event) => {
    setDamtavreba(event.target.value);
  };
  const [agwera, setAgwera] = useState(agweraa);
  const handleAgwera = (event) => {
    setAgwera(event.target.value);
  };

  useEffect(() => {
    window.localStorage.setItem("tanamdeboba", JSON.stringify(tanamdeboba));
    window.localStorage.setItem("damsaqmebeli", JSON.stringify(damsaqmebeli));
    window.localStorage.setItem("dawyeba", JSON.stringify(dawyeba));
    window.localStorage.setItem("damtavreba", JSON.stringify(damtavreba));
    window.localStorage.setItem("agwera", JSON.stringify(agwera));
  }, [tanamdeboba, damsaqmebeli, dawyeba, damtavreba, agwera]);

  const [Nofgamocdileba, setNofgamocdileba] = useState(1);
  function gamocdileba() {
    setNofgamocdileba((currNum) => currNum + 1);
    console.log(Nofgamocdileba);
  }
  return (
    <div>
      <div className="header">
        <h2 className="piradi-info">გამოცდილება</h2>
        <div className="line"></div>

        <div className="flex-container">
          <div className="marcxena">
            <div className="veli">
              <h4 className="up-lable">თანამდებობა</h4>
              <input
                type="text"
                name="tanamdeboba"
                id="tanamdeboba"
                placeholder="დეველოპერი, დიზაინერი"
                required
                onChange={handleTanamdeboba}
                value={tanamdeboba}
                className="input-style-2"
              />
              <p className="down-lable">მინიმუმ 2 სიმბოლო</p>
            </div>
            <div className="veli">
              <h4 className="up-lable">დამსაქმებელი</h4>
              <input
                type="text"
                name="damsaqmebeli"
                id="damsaqmebeli"
                placeholder="Microsoft"
                required
                onChange={handleDamsaqmebeli}
                value={damsaqmebeli}
                className="input-style-2"
              />
              <p className="down-lable">მინიმუმ 2 სიმბოლო</p>
            </div>
            <div className="veli">
              <h4 className="up-lable">დაწყების თარიღი</h4>

              <input
                type="date"
                className="input-style-1"
                name="dawyeba"
                id="dawyeba"
                onChange={handleDawyeba}
                value={dawyeba}
              />

              <input
                type="date"
                className="input-style-1"
                name="damtavreba"
                id="damtavreba"
                onChange={handleDamtavreba}
                value={damtavreba}
              />
            </div>
            <div className="veli">
              <h4 className="up-lable">აღწერ</h4>

              <textarea
                type="text"
                name="agwera"
                id="agwera"
                onChange={handleAgwera}
                value={agwera}
              />
            </div>
          </div>

          <div className="marjvena">
            <Resume />
          </div>
        </div>
      </div>
    </div>
  );
}
