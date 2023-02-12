import axios from "axios";
import "../App.css";
import "./sawyisi_gverdi.css";
import Resume from "../resume";
import { useState, useEffect } from "react";
export default function Ganatleba() {
  const [xarisxi, setXarisxi] = useState("");
  useEffect(() => {
    axios
      .get("https://resume.redberryinternship.ge/api/degrees")
      .then((res) => {
        setXarisxi(res);
      });
  }, []);

  // console.log(xarisxi.title?.map((data) => <option>{data}</option>));

  const saswavlebelii = JSON.parse(window.localStorage.getItem("saswavlebeli"));
  const xarisxi1i = JSON.parse(window.localStorage.getItem("xarisxi1"));
  const swavlisDamtavrebaa = JSON.parse(
    window.localStorage.getItem("swavlisDamtavreba")
  );
  const ganatlebisAgweraa = JSON.parse(
    window.localStorage.getItem("ganatlebisAgwera")
  );
  const [swavlisDamtavreba, setSwavlisDamtavreba] =
    useState(swavlisDamtavrebaa);
  const handleSwavlisDamtavreba = (event) => {
    setSwavlisDamtavreba(event.target.value);
  };

  const [saswavlebeli, setSaswavlebeli] = useState(saswavlebelii);
  const handlesaswavlebeli = (event) => {
    setSaswavlebeli(event.target.value);
  };
  const [xarisxi1, setXarisxi1] = useState(xarisxi1i);
  const handleXarisxi1 = (event) => {
    setXarisxi1(event.target.value);
  };
  const [ganatlebisAgwera, setGanatlebisAgwera] = useState(ganatlebisAgweraa);
  const handleGanatlebisAgwera = (event) => {
    setGanatlebisAgwera(event.target.value);
  };
  useEffect(() => {
    window.localStorage.setItem("saswavlebeli", JSON.stringify(saswavlebeli));
    window.localStorage.setItem("xarisxi1", JSON.stringify(xarisxi1));
    window.localStorage.setItem(
      "swavlisDamtavreba",
      JSON.stringify(swavlisDamtavreba)
    );
    window.localStorage.setItem(
      "ganatlebisAgwera",
      JSON.stringify(ganatlebisAgwera)
    );
  }, [saswavlebeli, xarisxi1, swavlisDamtavreba, ganatlebisAgwera]);
  console.log(swavlisDamtavreba);
  return (
    <div>
      <div className="header">
        <h2 className="piradi-info">განათელება</h2>
        <div className="line"></div>

        <div className="flex-container">
          <div className="marcxena">
            <div className="veli">
              <h4 className="up-lable">სასწავლებელი</h4>
              <input
                type="text"
                name="tanamdeboba"
                id="tanamdeboba"
                placeholder="დეველოპერი, დიზაინერი"
                required
                onChange={handlesaswavlebeli}
                value={saswavlebeli}
                className="input-style-2"
              />
              <p className="down-lable">მინიმუმ 2 სიმბოლო</p>
            </div>

            <div className="veli">
              <h4 className="up-lable">ხარისხი</h4>

              <select
                name="xarisxi1"
                id="xarisxi1"
                className="input-style-1"
                onChange={handleXarisxi1}
                value={xarisxi1}
              >
                {xarisxi.data?.map((option, index) => (
                  <option key={index - 1} value={option.value}>
                    {option.title}
                  </option>
                ))}
              </select>

              <input
                type="date"
                className="input-style-1"
                name="swavlisDamtavreba"
                id="swavlisDamtavreba"
                onChange={handleSwavlisDamtavreba}
                value={swavlisDamtavreba}
              />
            </div>
            <div className="veli">
              <h4 className="up-lable">აღწერა</h4>

              <textarea
                type="text"
                name="ganatlebisAgwera"
                id="ganatlebisAgwera"
                onChange={handleGanatlebisAgwera}
                value={ganatlebisAgwera}
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
