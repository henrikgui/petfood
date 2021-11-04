import React from "react";
import "./styles.css";

const Petshop = () => {
  return (
    <li className="petshop d-inline-block pl-3 align-bottom">
      <div className="d-inline-block">
        <img
          src="https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png"
          className="img-fluid"
        />
      </div>
      <div className="d-inline-block pl-3 align-bottom">
        <b>Petlove</b>
        <div className="petshop-infos">
          <span class="mdi mdi-star"></span>
          <text>
            <b>2,8</b>
          </text>
          <span class="mdi mdi-cash"></span>
          <text>$$$</text>
          <span class="mdi mdi-crosshairs-gps"></span>
          <text>2,9km</text>
        </div>
        <label className="badge badge-primary">Frete Grátis</label>
      </div>
    </li>
  );
};

export default Petshop;
