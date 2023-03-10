import { useState, useEffect } from "react";
import "../App.css";
import Resume from "../resume";
import { useFormik } from "formik";
import * as yup from "yup";
import warning from "../assets/warning.png";
import gud from "../assets/gud.png";

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

  let emailRooles = new RegExp("[a-z0-9]+@redberry.com");
  let telefoniRooles = new RegExp("\\++995");

  // console.log(namee.length);
  // emailRooles.test(meili);
  return (
    <div>
      <div className="header">
        <h2 className="piradi-info">?????????????????? ????????????</h2>
        <div className="line"></div>
      </div>
      <div className="flex-container">
        <div className="marcxena">
          <div className="saxeli-gvari">
            <div className="veli">
              <h4 className="up-lable">??????????????????</h4>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="??????????????????"
                required
                onChange={handleChange}
                value={name}
                // className="input-style-1"

                className={
                  name != null && name.length < 2
                    ? "input-style-1-red"
                    : "input-style-1"
                }
              />
              <img
                src={namee != null && namee.length > 1 ? gud : null}
                alt=""
              />
              <p className="down-lable">????????????????????? 2 ?????????, ????????????????????? ??????????????????</p>
            </div>

            <div className="veli">
              <h4 className="up-lable">???????????????</h4>

              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder=" ???????????????"
                required
                onChange={handleLastName}
                value={lastName}
                // className="input-style-1"
                className={
                  lastName != null && lastName.length < 2
                    ? "input-style-1-red"
                    : "input-style-1"
                }
              />
              <img
                src={lastName != null && lastName.length > 1 ? gud : null}
                alt=""
              />

              <p className="down-lable">????????????????????? 2 ?????????, ????????????????????? ??????????????????</p>
            </div>
          </div>

          <div className="atvirtva">
            <h2>?????????????????? ??????????????? ????????????????????????</h2>
            <label className="button-style-4" htmlFor="file">
              ????????????????????????
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
            <h4 className="up-lable">???????????? ????????????????????? (??????????????????????????????????????????)</h4>
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
            <h4 className="up-lable">??????.???????????????</h4>
            <input
              type="text"
              id="meili"
              name="meili"
              placeholder="???????????????"
              onChange={handleMeili}
              required
              value={meili}
              className={
                emailRooles.test(meili) ? "input-style-2" : "input-style-2-red"
              }
            />
            <img src={emailRooles.test(meili) ? gud : warning} alt="" />

            <p className="down-lable"> ???????????? ???????????????????????????????????? @redberry.com-??????</p>
          </div>
          <div className="veli">
            <h4 className="up-lable">????????????????????????</h4>
            <input
              type="text"
              id="telefoni"
              name="telefoni"
              placeholder="????????????????????????"
              onChange={handleTelefoni}
              required
              className={
                telefoniRooles.test(telefoni)
                  ? "input-style-2"
                  : "input-style-2-red"
              }
              value={telefoni}
            />
            <img
              src={
                telefoniRooles.test(telefoni) && telefoni.length == 13
                  ? gud
                  : warning
              }
              alt=""
            />

            <p className="down-lable">
              ???????????? ?????????????????????????????????????????? ????????????????????? ??????????????????????????? ?????????????????? ?????????????????????
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
