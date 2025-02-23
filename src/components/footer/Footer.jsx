import React from "react";
import logo from "../../assets/nav-logo.svg";
import visa from "../../assets/visa.svg";
import vk from "../../assets/vk.svg";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  
  // let {pathname} = useLocation()


  // if(pathname.includes('login') || pathname.includes('admin')){
  //     return <></>
  // }

  return (
    <div className="footer">
      <div className="container">
        <div className="footer_contents">
          <ul>
            <li>
              <Link to={"/"}>
                <img src={logo} alt="logo" />
              </Link>
            </li>
            <li>
              <h3>8 (800) 890-46-56</h3>
            </li>
            <li>
              <Link
                to={
                  "https://www.visa.co.in/pay-with-visa/click-to-pay-with-visa.html"
                }
              >
                <img className="visa" src={visa} alt="visa card" />
              </Link>
            </li>
            <li>
              <p>Политика конфидециальности</p>
            </li>
            <li>
              <p>Пользовательское соглашение</p>
            </li>
            <li>
              <div className="vk">
                <img src={vk} alt="vk" />
                <img src={vk} alt="vk" />
                <img src={vk} alt="vk" />
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <h4>Покупателям</h4>
            </li>
            <li>
              <p>О компании</p>
            </li>
            <li>
              <p>Доставка и оплата</p>
            </li>
            <li>
              <p>Возврат</p>
            </li>
            <li>
              <p>Гарантии</p>
            </li>
            <li>
              <p>Контакты</p>
            </li>
            <li>
              <p>Блог</p>
            </li>
          </ul>
          <ul>
            <li>
              <h4>Товары</h4>
            </li>
            <li>
              <p>Люстры</p>
            </li>
            <li>
              <p>Светильники</p>
            </li>
            <li>
              <p>Бра</p>
            </li>
            <li>
              <p>Торшеры</p>
            </li>
            <li>
              <p>Комплектуюшие</p>
            </li>
            <li>
              <p>Настольные лампы</p>
            </li>
          </ul>
          <ul>
            <li>
              <h4> </h4>
            </li>
            <li>
              <p>Споты</p>
            </li>
            <li>
              <p>Трековые светильники</p>
            </li>
            <li>
              <p>Уличные светильники</p>
            </li>
            <li>
              <p>Технические светильники</p>
            </li>
            <li>
              <p>Светодиодные ленты</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
