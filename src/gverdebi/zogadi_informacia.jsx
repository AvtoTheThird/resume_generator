import { useState, useEffect } from "react";
import "../App.css";
import Resume from "../resume";
function App() {
  const namee = JSON.parse(window.localStorage.getItem("name"));
  const lastnamee = JSON.parse(window.localStorage.getItem("lastname"));
  const meilii = JSON.parse(window.localStorage.getItem("meili"));
  const telefonii = JSON.parse(window.localStorage.getItem("telefoni"));
  const chemsShesaxebb = JSON.parse(
    window.localStorage.getItem("chemsShesaxeb")
  );
  const filee = JSON.parse(window.localStorage.getItem("file"));

  const [name, setname] = useState(namee);
  const handleChange = (event) => {
    setname(event.target.value);
  };

  const [lastName, setLastName] = useState(lastnamee);
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const [meili, setMeili] = useState(meilii);
  const handleMeili = (event) => {
    setMeili(event.target.value);
  };
  const [telefoni, setTelefoni] = useState(telefonii);
  const handleTelefoni = (event) => {
    setTelefoni(event.target.value);
  };
  const [chemsShesaxeb, setChemsShesaxeb] = useState(chemsShesaxebb);
  const handleCemshSesaxeb = (event) => {
    setChemsShesaxeb(event.target.value);
  };
  const [file, setFile] = useState(filee);
  function handlePhoto(e) {
    // console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  // useEffect(() => {
  //   const data = window.localStorage.getItem("name");
  //   if (data == null) setname(JSON.parse(data));
  // }, []);
  // useEffect(() => {
  //   const data1 = window.localStorage.getItem("lastname");
  //   if (data1 == null) setname(JSON.parse(data1));
  // }, []);

  useEffect(() => {
    window.localStorage.setItem("name", JSON.stringify(name));
    window.localStorage.setItem("lastname", JSON.stringify(lastName));
    window.localStorage.setItem("meili", JSON.stringify(meili));
    window.localStorage.setItem("telefoni", JSON.stringify(telefoni));
    window.localStorage.setItem("chemsShesaxeb", JSON.stringify(chemsShesaxeb));
    window.localStorage.setItem("file", JSON.stringify(file));
  }, [name, lastName, meili, telefoni, chemsShesaxeb, file]);
  // useEffect(() => {
  //   window.localStorage.setItem("lastname", JSON.stringify(lastName));
  // }, [lastName]);

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

          <div className="atvirtva">
            <h2>პირადი ფოტოს ატვირტვა</h2>
            <label className="button-style-4" htmlFor="file">
              ატვირთვა
            </label>
            <input
              className="button-style-3"
              type="file"
              id="file"
              onChange={handlePhoto}
            />
            <img value={file} />
          </div>

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
          <Resume />
        </div>
      </div>
    </div>
  );
}

export default App;
