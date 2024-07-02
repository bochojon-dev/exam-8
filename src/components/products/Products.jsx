import React, { useEffect, useState } from "react";
import {
  useGetProductByIdQuery,
  useGetProductsQuery,
} from "../../context/api/productApi";

import rightArrowBlack from "../../assets/right-arrow-black.svg";
import rightArrowWhite from "../../assets/right-arrow-white.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { Link, useSearchParams } from "react-router-dom";

const Products = ({ sliceCount = 8 }) => {
  const [detail, setDetail] = useState(null);
  const { data } = useGetProductsQuery();
  const [searchParams, setSearchParams] = useSearchParams();

  let id = searchParams.get("detail");
  const { data: databyId } = useGetProductByIdQuery(id);

  useEffect(() => {
    if (id) {
      setDetail(databyId);
    }
  }, [searchParams, databyId]);

  let products = data?.slice(0, sliceCount).map((product) => (
    <div className="products_card" key={product.id}>
      <div className="img_pro">
        <div className="img_pro2">
          <img width={300} height={220} src={product?.url} alt={product?.url} />
        </div>
        <button>
          <IoHeartOutline />
        </button>
      </div>
      <div className="pro_prag">
        <Link to={`/products/${product.id}`}>
          <h3>{product.title}</h3>
        </Link>
        <div className="price">
          <span>
            <h4>{product.price} ₽</h4>
            <h3>{product.price * 0.9} ₽</h3>
          </span>
          <button>
            <IoCartOutline />
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="products">
        <div className="container">
          <div className="products_title">
            <h2>Популярные товары</h2>
            <Link to={"/all-products"}>
              <button>
                Все товары{" "}
                <img
                  className="black_arrow"
                  src={rightArrowBlack}
                  alt="right-arrow"
                />
                <img
                  className="white_arrow"
                  src={rightArrowWhite}
                  alt="right-arrow"
                />
              </button>
            </Link>
          </div>
          <div className="product_cards">{products}</div>
          <div className="product_btn">
            <button>
              Все товары <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
