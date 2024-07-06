import React, { useEffect } from "react";
import Products from "../../components/products/Products";

const AllProducts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <div className="all_products_title">
        <h5>
          Главная <span>{">"}</span>
        </h5>
      </div>
      <Products />
    </div>
  );
};

export default AllProducts;
