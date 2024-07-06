import React from "react";
import { Link } from "react-router-dom";

const Guarantee = () => {
  return (
    <div className="payment">
      <div className="container">
        <div className="blog_page">
          <div className="payment__title">
            <h5>
              <Link to={"/"}>Главная</Link> <span>{">"}</span>
            </h5>
            <h5 className="payment_page_title">Гарантии</h5>
          </div>
          <div className="payment_contents">
            <h2>Гарантии</h2>
            <div className="payment_bside">
              <div className="return_item">
                <h3>Обмен и возврат по желанию покупателя</h3>
                <p>
                  Все товары в магазине «NornLight» имеют гарантию.
                  Она заявляется производителем и имеет определенный срок
                  действия на различные группы товаров. Если ваше изделие вышло
                  из строя в течение гарантийного срока вы можете обратиться к
                  нам и получить бесплатный ремонт. Для этого нужно:
                </p>
                <ul>
                  <li style={{ color: "#454545" }}>
                    Предоставить чек, накладную или сообщить почту или номер
                    телефона, указанные при оформлении заказа.
                  </li>
                  <li style={{ color: "#454545" }}>
                    Привезти товар к нам на склад или отправить его транспортной
                    компанией.
                  </li>
                  <li style={{ color: "#454545" }}>
                    После товар отправляется на экспертизу и ремонт. Если ремонт
                    невозможен, мы обменяем изделие на аналогичное либо вернем
                    деньги за покупку.
                  </li>
                </ul>
                <p style={{ padding: "24px 0 90px" }}>
                  Обращаем внимание, что «А-Свет» не является сервисным центром,
                  а выполняет роль посредника между клиентом и поставщиком.
                  Поэтому сроки проведения ремонта могут отличаться для товаров
                  различных брендов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guarantee;
