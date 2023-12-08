import React from "react";
import "./content.css";

const Content = ({ productsDetails }) => {
  return (
    <div className="content">
      {productsDetails.map(function (value, index, array) {
        return (
          <div className="products" key={index}>
            <div className="img-section">
              <img src={value.img} alt={value.productName} />
            </div>
            <div className="content-layer">
              <div className="name-section">
                <h4>{value.productName}</h4>
              </div>
              <div className="rate-section">
                <h5>&#8377;{value.productPrice}</h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
