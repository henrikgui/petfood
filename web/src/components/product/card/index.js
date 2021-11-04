import React from "react";
import "./styles.css";
const Card = () => {
  return (
    <div className="product col-3">
      <img
        src="https://staticpetz.stoom.com.br/fotos/1588017118738.jpg"
        className="img-fluid align-center"
      />
      <button className="btn btn-primary rounded-circle">+</button>
      
      <h4>
        <label className="badge badge-primary">R$ 90,00</label>
      </h4>
      <small>
        <b>
          Ração Premier Fórmula para Cães Adultos de Raças Grandes Sabor
          Cordeiro - 15kg
        </b>
      </small>
    </div>
  );
};
export default Card;
