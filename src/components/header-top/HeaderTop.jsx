import React from "react";
import { Link, useLocation } from "react-router-dom";

const HeaderTop = () => {

  
  let {pathname} = useLocation()

  if(pathname.includes('login') || pathname.includes('admin')){
      return <></>
  }

  return (
    <div className="navbar">
      <div className="container">
        <div className="nav_contents">
          <ul>
            <Link to={"/company"}>
              <li>О компании</li>
            </Link>
            <Link to={"/payment"}>
              <li>Доставка и оплата</li>
            </Link>
            <Link to={"/return"}>
              <li>Возврат</li>
            </Link>
            <Link to={"/guarantee"}>
              <li>Гарантии</li>
            </Link>
            <Link to={"/contact"}>
              <li>Контакты</li>
            </Link>
            <Link to={"/blog"}>
              <li>Блог</li>
            </Link>
          </ul>
          <div className="booking_call">
            <p>8 (800) 890-46-56</p>
            <span>Заказать звонок</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
