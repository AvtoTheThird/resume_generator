import { useState } from "react";
import "../App.css";
import Resume from "../resume";
function App() {
  const [name, setname] = useState("");
  const handleChange = (event) => {
    setname(event.target.value);
  };

  const [lastName, setLastName] = useState("");
  const handleLastName = (event) => {
    setLastName(event.target.value);
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
    <div>
      <div className="header">
        <h2 className="piradi-info">პირადი ინფო</h2>
        <div className="line"></div>
      </div>
      <div className="flex-container">
        <div className="marcxena">
          <div className="saxeli-gvari">
            <div className="veli">
              <h4 className="up-lable">სახელი</h4>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="სახელი"
                required
                onChange={handleChange}
                value={name}
                className="input-style-1"
              />
              <p className="down-lable">მინიმუმ 2 ასო, ქართული ასოები</p>
            </div>
            <div className="veli">
              <h4 className="up-lable">გვარი</h4>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder=" გვარი"
                required
                onChange={handleLastName}
                value={lastName}
                className="input-style-1"
              />
              <p className="down-lable">მინიმუმ 2 ასო, ქართული ასოები</p>
            </div>
          </div>
          <h2>
            imis atvirtva <button>atvirtva</button>
          </h2>
          <div className="veli">
            <h4 className="up-lable">ჩემს შესახებ (არასავალდებულო)</h4>
            <textarea
              type="text"
              id="chems-shesaxeb"
              name="chems-shesaxeb"
              placeholder="chems-shesaxeb"
              onChange={handleCemshSesaxeb}
              required
              value={chemsShesaxeb}
            />
          </div>
          <div className="veli">
            <h4 className="up-lable">ელ.ფოსტა</h4>
            <input
              type="text"
              id="meili"
              name="meili"
              placeholder="მეილი"
              onChange={handleMeili}
              required
              value={meili}
              className="input-style-2"
            />
            <p className="down-lable"> უმდა მთავრდებოდეს @redbery.com-ით</p>
          </div>
          <div className="veli">
            <h4 className="up-lable">ტელეფონი</h4>
            <input
              type="text"
              id="telefoni"
              name="telefoni"
              placeholder="ტელეფონი"
              onChange={handleTelefoni}
              required
              className="input-style-2"
              value={telefoni}
            />
            <p className="down-lable">
              უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
            </p>
          </div>
        </div>

        <div className="marjvena">
          <Resume
            name={name}
            meili={meili}
            telefoni={telefoni}
            chemsShesaxeb={chemsShesaxeb}
            lastName={lastName}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
