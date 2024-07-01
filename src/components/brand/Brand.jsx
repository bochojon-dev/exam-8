import React from "react";
import brand1 from "../../assets/brand1.svg";
import brand2 from "../../assets/brand2.svg";
import brand3 from "../../assets/brand3.svg";
import brand4 from "../../assets/brand4.svg";

const Brand = () => {
  return (
    <div className="container brand_contents">
      <h2>Только проверенные бренды</h2>
      <div className="brands">
        <img src={brand1} alt="our brands" />
        <img src={brand2} alt="our brands" />
        <img src={brand3} alt="our brands" />
        <img src={brand4} alt="our brands" />
      </div>
    </div>
  );
};

export default Brand;
