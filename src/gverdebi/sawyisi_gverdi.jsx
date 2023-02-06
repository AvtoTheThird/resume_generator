import "../App.css";
import RedberryLogo from "../assets/RedberryLogo.png";
import MeoreLogo from "../assets/BGlogo.png";
export default function Sawyisi_gverdi() {
  return (
    <div className="sawyisi">
      <div>
        <img src={RedberryLogo} alt="" className="Rlogo" />
        <div className="line"></div>
        <img className="meorelogo" src={MeoreLogo} alt="" />
        <button className="dawyeba"> რეზიუმეს დამატება</button>
      </div>
    </div>
  );
}
