import React from "react";

const HeaderTop = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav_contents">
          <ul>
            <li>О компании</li>
            <li>Доставка и оплата</li>
            <li>Возврат</li>
            <li>Гарантии</li>
            <li>Контакты</li>
            <li>Блог</li>
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
