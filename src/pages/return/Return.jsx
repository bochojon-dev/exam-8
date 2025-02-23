import React from "react";
import { Link } from "react-router-dom";

const Return = () => {
  return (
    <div className="container payment">
      <div className="payment__title">
        <h5>
          <Link to={"/"}>Главная</Link> <span>{">"}</span>
        </h5>
        <h5 className="payment_page_title">Возврат</h5>
      </div>
      <div className="payment_contents">
        <h2>Возврат</h2>
        <div className="payment_bside">
          <div className="return_item">
            <h3>Обмен и возврат по желанию покупателя</h3>
            <p>
              Если товар по каким-то причинам не подошел вам, вы имеете право
              вернуть его или обменять на другой в течение 7 дней* с момента
              покупки при соблюдении следующих условий:
            </p>
            <ul>
              <li>
                Товар имеет первоначальный вид, имеется товарная кондиция;
              </li>
              <li>
                Товар имеет полную комплектацию, включая упаковочные материалы;
              </li>
              <li>
                Товар не имеет следов подключался и не имеет признаков монтажа;
              </li>
              <li>
                Упаковка товара не имеет повреждений, присутствует
                первоначальный товарный вид;
              </li>
              <li>
                Есть документ, подтверждающий покупку в нашем интернет-магазине.
              </li>
              <li>Для возврата товара необходимо привезти его к нам в офис.</li>
              <li>
                Товар из других городов можно прислать нам транспортной
                компанией, при этом услуги транспортной компании  оплачиваются
                клиентом.
              </li>
              <li>
                В течение 14 дней для отдельных брендов. При оформлении заказа
                уточните у менеджера.
              </li>
            </ul>
          </div>
          <div className="return_item">
            <h3>Обмен и возврат по ошибке продавца</h3>
            <p>Причины обмена или возврата по ошибке продавца:</p>
            <ul>
              <li>Неполная комплектация товара</li>
              <li>Брак или дефект товара</li>
              <li>
                Если вы выявили дефект, брак или неполную комплектацию товара,
                необходимо сделать фото дефекта и отправить на
                почту mail@at-svet.ru, указав краткое описание характера брака/
              </li>
              <li>
                Мы заменим бракованный товар или довезем недостающие части.
                Доставка будет осуществлена бесплатно
              </li>
            </ul>
          </div>
          <div className="return_item">
            <h3>Возврат денежных средств</h3>
            <p>
              Возврат денежных средств осуществляется путем перевода на
              банковские реквизиты покупателя при наличии заявления от
              покупателя.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Return;
