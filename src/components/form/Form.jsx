import "./Form.scss";
import ArrowIcon from "../../images/icon-arrow.svg";
import { useState } from "react";

function Form() {
  const [ip, setIp] = useState("188.154.91.6");
  const [ipData, setIpData] = useState("");

  const getLocationInfo = async e => {
    e.preventDefault();
    const data = await fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=at_uk7VgMoiPdlPrTBQmTq5cYKBtTNnF&ipAddress=${ip}`
    );
    const geoInfo = await data.json();
    setIpData(geoInfo);
    console.log(geoInfo);
  };

  return (
    <main className="info">
      <form className="form" onSubmit={getLocationInfo}>
        <label className="form__label">
          <input type="text" className="form__input" />
        </label>
        <button className="form__btn">
          <img src={ArrowIcon} alt="button to submit ip address query" />
        </button>
      </form>
      <section className="data">
        <div className="data__container">
          <h2>IP Address</h2>
          <p>{ip}</p>
        </div>
        <div className="data__container">
          <h2>location</h2>
          <p></p>
        </div>
        <div className="data__container">
          <h2>timezone</h2>
          <p>utc -05:00</p>
        </div>
        <div className="data__container">
          <h2>ISP</h2>
          <p>SpaceX Starlink</p>
        </div>
      </section>
    </main>
  );
}
export default Form;
