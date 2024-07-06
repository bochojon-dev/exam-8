import React, { useEffect, useState } from "react";
import logo from "../../assets/nav-logo.svg";
import katalog from "../../assets/katalog.svg";
import katalog2 from "../../assets/katalog-hover.svg";
import search from "../../assets/search.svg";
import heart from "../../assets/heart.svg";
import compare from "../../assets/compare.svg";
import { BsCart3 } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const HeaderBottom = () => {

  let {pathname} = useLocation()

  if(pathname.includes('login') || pathname.includes('admin')){
      return <></>
  }


  const [toggle, setToggle] = useState(false);
  const [shrink, setShrink] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`header ${shrink ? "shrink" : ""}`}>
      <div className="container">
        <div className="header_bottom">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button className="catalog_button">
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
              <span>1</span>
              <p>Избранное</p>
            </div>
            <div className="header_icon">
              <img src={compare} alt="compare" />
              <p>Сравнение</p>
            </div>
            <div className="header_icon third">
              <BsCart3 className="cart-image" />
              <span>1</span>
              <p>Корзина</p>
            </div>
          </div>
          <button className="menu" onClick={() => setToggle(!toggle)}>
            <IoMenu />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
