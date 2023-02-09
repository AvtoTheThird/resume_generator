import React from "react";
import { useState } from "react";

// const [tanamdeboba1, setTanamdeboba1] = useState("");
// const handleTanamdeboba1 = (event) => {
//     setTanamdeboba1(event.target.value);
//     console.log(1);
// };
// function handleTanamdeboba1() {
//   console.log(1);
// }
export default function Insides() {
  return (
    <div className="marcxena">
      <div className="veli">
        <h4 className="up-lable">თანამდებობა</h4>
        <input
          type="text"
          name="tanamdeboba"
          id="tanamdeboba"
          placeholder="დეველოპერი, დიზაინერი"
          required
          //   onChange={handleTanamdeboba1}
          //   value={tanamdeboba1}
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
          //   onChange={handleDamsaqmebeli}
          //   value={damsaqmebeli}
          className="input-style-2"
        />
        <p className="down-lable">მინიმუმ 2 სიმბოლო</p>
      </div>
      <div className="veli">
        <input
          type="date"
          className="input-style-1"
          name="dawyeba"
          id="dawyeba"
          //   onChange={handleDawyeba}
          //   value={dawyeba}
        />

        <input
          type="date"
          className="input-style-1"
          name="damtavreba"
          id="damtavreba"
          //   onChange={handleDamtavreba}
          //   value={damtavreba}
        />
      </div>
      <div className="veli">
        <textarea
          type="text"
          name="agwera"
          id="agwera"
          //   onChange={handleAgwera}
          //   value={agwera}
        />
      </div>
    </div>
  );
}
