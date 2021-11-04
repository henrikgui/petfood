import React from "react";
import "./styles.css";

const Product = () => {
  return (
    <div className="product-list col-12">
      <div className="row">
        <div className="col-3">
          <img
            src="https://www.petlove.com.br/images/products/224974/product/Ra%C3%A7%C3%A3o_Seca_Pedigree_para_C%C3%A3es_Adultos_Ra%C3%A7as_Pequenas_3104845.jpg?1627721469"
            className="img-fluid"
          />
        </div>
        <div className="col-6">
          <h6>
            <label className="badge badge-primary">R$30,00</label>
          </h6>
          <small>
            <b>Ração Seca Pedigree Para Cães Adultos Raças Pequenas - 15 Kg</b>
          </small>
        </div>
        <div className="col-3">
          <button className="btn btn-secondary rounded-circle">-</button>
        </div>
      </div>
    </div>
  );
};
export default Product;
