import React from "react";
import logo from "../../assets/nav-logo.svg";
import katalog from "../../assets/katalog.svg";
import katalog2 from "../../assets/katalog-hover.svg";
import search from "../../assets/search.svg";
import heart from "../../assets/heart.svg";
import compare from "../../assets/compare.svg";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const HeaderBottom = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header_bottom">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button>
            <img src={katalog} alt="category" />
            <img className="katalog_hover" src={katalog2} alt="category" />
            Каталог
          </button>
          <form action="">
            <input type="search" placeholder="Поиск по товарам" />
            <img src={search} alt="search" />
          </form>
          <div className="header_icons">
            <div className="header_icon">
              <img src={heart} alt="wishlist" />
              <p>Избранное</p>
            </div>
            <div className="header_icon">
              <img src={compare} alt="compare" />
              <p>Избранное</p>
            </div>
            <div className="header_icon third">
              <BsCart3 className="cart-image" />
              <span>1</span>
              <p>Избранное</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
