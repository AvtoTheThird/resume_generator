import { useState } from "react";
import "./App.css";
import Resume from "./resume";
function App() {
  const [name, setname] = useState("");
  const handleChange = (event) => {
    setname(event.target.value);
  };

  const [meili, setMeili] = useState("");
  const handleMeili = (event) => {
    setMeili(event.target.value);
  };
  const [telefoni, setTelefoni] = useState("");
  const handleTelefoni = (event) => {
    setTelefoni(event.target.value);
  };
  const [chemsShesaxeb, setChemsShesaxeb] = useState("");
  const handleCemshSesaxeb = (event) => {
    setChemsShesaxeb(event.target.value);
  };
  return (
    <div className="App">
      <div className="header">
        <h2 className="piradi-info">პირადი ინფო</h2>
        <div className="line"></div>
      </div>
      <div className="flex-container">
        <div className="marcxena">
          <div className="saxeli-gvari">
            <div>
              <h4 className="up-lable">სახელი</h4>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="სახელი გვარი"
                required
                onChange={handleChange}
                value={name}
                className="input-style-1"
              />
              <p className="down-lablee">ქართულია სოები</p>
            </div>
            <div>
              <h4 className="up-lable">მეილი</h4>
              <input
                type="text"
                id="meili"
                name="meili"
                placeholder="მეილი"
                onChange={handleMeili}
                required
                value={meili}
                className="input-style-1"
              />
              <p className="down-lable"> უმდა მთავრდებოდეს @redbery.com</p>
            </div>
          </div>
          <h2>
            imis atvirtva <button>atvirtva</button>
          </h2>

          <textarea
            type="text"
            id="chems-shesaxeb"
            name="chems-shesaxeb"
            placeholder="chems-shesaxeb"
            onChange={handleCemshSesaxeb}
            required
            value={chemsShesaxeb}
          />
          <label htmlFor="telefoni">teliki</label>
          <input
            type="text"
            id="telefoni"
            name="telefoni"
            placeholder="ტელეფონი"
            onChange={handleTelefoni}
            required
            className="input-style-1"
            value={telefoni}
          />
        </div>
        <div className="marjvena">
          <Resume
            name={name}
            meili={meili}
            telefoni={telefoni}
            chemsShesaxeb={chemsShesaxeb}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
