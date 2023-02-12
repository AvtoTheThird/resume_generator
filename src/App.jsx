import { useState } from "react";
import "./App.css";
import Zogadi_Informacia from "./gverdebi/zogadi_informacia";
import Sawyisi_gverdi from "./gverdebi/sawyisi_gverdi";
import Gamocdileba from "./gverdebi/gamocdileba";
import Ganatleba from "./gverdebi/ganatleba";
import Rezume from "./gverdebi/rezume";
import Button from "./button";
import Resume from "./resume";
import resetbutton from "./assets/resetpage.png";
function App(props) {
  const [page, setPage] = useState(0);
  // const PageNames = [
  //   "Sawyisi_gverdi",
  //   "Zogadi_Informacia",
  //   "Gamocdileba",
  //   "Ganatleba",
  //   "Rezume",
  // ];
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
      {page > 0 ? (
        <button
          className="page--reset"
          onClick={() => {
            setPage((currPage) => (currPage = 0));
          }}
        >
          <img src={resetbutton} alt="" />
        </button>
      ) : null}
      {PageDisplay()}
      {page < 4 ? (
        <div className="knopkebi">
          <button
            className="button-shemdegi"
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            წინა
          </button>
          <button
            className="button-shemdegi"
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}
          >
            შემდეგი
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
