import React from "react";

const ContactItem = () => {
  return (
    <div className="container">
      <div className=" contact_items">
        <div className="contact_item">
          <h3>Адрес магазина</h3>
          <p>г. Москва, Дмитровское шоссе д.100с2</p>
        </div>
        <div className="contact_item">
          <h3>Почта</h3>
          <p>NORNLIGHT@mail.ru</p>
        </div>
        <div className="contact_item">
          <h3>Телефон</h3>
          <p>8 (800) 890-46-56</p>
        </div>
        <button className="button">Оставить заявку</button>
      </div>
    </div>
  );
};

export default ContactItem;
