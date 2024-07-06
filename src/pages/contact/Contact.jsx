import React from "react";
import { Link } from "react-router-dom";
import Map from "../../components/map/Map";
import ContactItem from "../../components/contact-item/ContactItem";

const Contact = () => {
  return (
    <div className="payment">
      <div className="container">
        <div className="blog_page">
          <div className="payment__title">
            <h5>
              <Link to={"/"}>Главная</Link> <span>{">"}</span>
            </h5>
            <h5 className="payment_page_title">Возврат</h5>
          </div>
          <div style={{ gap: "50%" }} className="payment_contents">
            <h2>Контакты</h2>
            <div className="payment_bside">
              <div className="return_item">
                <h3>8 (800) 890-46-56</h3>
                <p>
                  Пн-Пт: 10:00 до 19:00 <br /> Сб-Вс: заказ через корзину
                  Телефоны: 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Map />
      <ContactItem />
    </div>
  );
};

export default Contact;
