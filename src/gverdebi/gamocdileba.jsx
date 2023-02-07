import { useState, useEffect } from "react";
import Resume from "../resume";
import "./sawyisi_gverdi.css";
import "../App.css";

export default function Gamocdileba() {
  const [tanamdeboba, setTanamdeboba] = useState(" ");
  const handleTanamdeboba = (event) => {
    setTanamdeboba(event.target.value);
  };

  const [damsaqmebeli, setDamsaqmebeli] = useState("");
  const handleDamsaqmebeli = (event) => {
    setDamsaqmebeli(event.target.value);
  };
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
                className={"input-style-2"}
              />
              <p className="down-lable">მინიმუმ 2 სიმბოლო</p>
            </div>
          </div>

          <div className="marjvena">
            <Resume tanamdeboba={tanamdeboba} damsaqmebeli={damsaqmebeli} />
          </div>
        </div>
      </div>
    </div>
  );
}
