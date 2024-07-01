import React from "react";
import brand1 from "../../assets/brand1.svg";
import brand2 from "../../assets/brand2.svg";
import brand3 from "../../assets/brand3.svg";
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <div className="container brand_contents">
      <h2>Только проверенные бренды</h2>
      <div className="brands">
        <Link to={"https://artelamp.ru/"}>
          <img src={brand1} alt="our brands" />
        </Link>
        <Link to={"https://divinare.it/"}>
          <img src={brand2} alt="our brands" />
        </Link>
        <Link
          to={
            "https://odeon-light.com/catalog/odeon_light/?utm_referrer=https%3A%2F%2Fwww.google.com%2F"
          }
        >
          <img src={brand3} alt="our brands" />
        </Link>
        <Link to={"https://artelamp.ru/"}>
          <img src={brand1} alt="our brands" />
        </Link>
      </div>
    </div>
  );
};

export default Brand;
