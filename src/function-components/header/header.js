import React from "react";
import "./header.css";

const Header = ({ shopName, menuTitle }) => {
  return (
    <div className="header">
      <div className="heading-section">
        <h3 className="menu">{shopName}</h3>
        <p className="shop-name">{menuTitle}</p>
      </div>
    </div>
  );
};

export default Header;
