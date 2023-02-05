import { useState } from "react";
import "./App.css";
import Zogadi_Informacia from "./gverdebi/zogadi_informacia";
import Sawyisi_gverdi from "./gverdebi/sawyisi_gverdi";
import Gamocdileba from "./gverdebi/gamocdileba";
import Ganatleba from "./gverdebi/ganatleba";
import Rezume from "./gverdebi/rezume";
import Button from "./button";
function App(props) {
  const [page, setPage] = useState(0);
  const PageNames = [
    "Sawyisi_gverdi",
    "Zogadi_Informacia",
    "Gamocdileba",
    "Ganatleba",
    "Rezume",
  ];
  const PageDisplay = () => {
    if (page === 0) {
      return <Sawyisi_gverdi />;
    } else if (page === 1) {
      return <Zogadi_Informacia />;
    } else if (page === 2) {
      return <Gamocdileba />;
    } else if (page === 3) {
      return <Ganatleba />;
    } else if (page === 4) {
      return <Rezume />;
    }
  };
  return (
    <div className="App">
      {PageDisplay()}
      <div className="knopkebi">
        <button
          className="button-shemdegi"
          onClick={() => {
            setPage((currPage) => currPage + 1);
          }}
        >
          შემდეგი
        </button>
        <button
          className="button-shemdegi"
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          წინა
        </button>
      </div>
    </div>
  );
}

export default App;
