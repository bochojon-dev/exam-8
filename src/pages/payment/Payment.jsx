import React from "react";
import Map from "../../components/map/Map";

const Payment = () => {
  return (
    <div className="payment">
      <div className="container">
        <div className="payment__title">
          <h5>
            Главная <span>{">"}</span>
          </h5>
          <h5 className="payment_page_title">О компании</h5>
        </div>
        <div className="payment_contents">
          <div className="payment_aside">
            <h2>Доставка и оплата</h2>
          </div>
          <div className="payment_bside">
            <div className="bside_item">
              <h3>Доставка</h3>
              <p>
                Мы осуществляем доставку со склада по Москве и Московской
                области собственной курьерской службой. Транспортными компаниями
                нашу продукцию мы доставляем по всей территории РФ, а так же по
                всем странам СНГ. <span>Сроки доставки: 4—6 недель</span>
              </p>
            </div>
            <div className="bside_item">
              <h3>Курьерская доставка</h3>
              <p>
                БЕСПЛАТНО доставим в приделах МКАД любой заказ{" "}
                <span>от 5 000 ₽</span>.Заказы свыше <span>30 000 ₽</span> имеют
                бесплатную доставку, включительно 15 км от МКАД
              </p>
            </div>
            <div className="bside_item">
              <h3>Самовывоз</h3>
              <p>
                Любой заказ можно забрать самостоятельно по адресу: г.
                Москва, Дмитровское шоссе д.100с2
              </p>
            </div>
          </div>
        </div>
      </div>
      <Map />
    </div>
  );
};

export default Payment;
