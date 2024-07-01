import React from "react";
import company1 from "../../assets/company1.svg";
import company2 from "../../assets/company2.svg";
import company3 from "../../assets/company3.svg";
import company4 from "../../assets/company4.svg";
import rightArrowBlack from "../../assets/right-arrow-black.svg";
import rightArrowWhite from "../../assets/right-arrow-white.svg";

const Company = () => {
  return (
    <div className="company">
      <div className="container">
        <div className="company_title">
          <h2>Почему NORNLIGHT?</h2>
          <button>
            О компании
            <img
              className="black_arrow"
              src={rightArrowBlack}
              alt="right-arrow"
            />
            <img
              className="white_arrow"
              src={rightArrowWhite}
              alt="right-arrow"
            />
          </button>
        </div>
        <div className="company_cards">
          <div className="company_card">
            <img src={company1} alt="company image" />
            <h3>Только проверенные бренды</h3>
            <p>Бренды, проверенные временем и качеством</p>
          </div>
          <div className="company_card">
            <img src={company2} alt="company image" />
            <h3>Самые низкие цены</h3>
            <p>Ниже не будет нигде</p>
          </div>
          <div className="company_card">
            <img src={company3} alt="company image" />
            <h3>Быстрая доствка</h3>
            <p>Доставляем по всей РФ за 1-10 дней</p>
          </div>
          <div className="company_card">
            <img src={company4} alt="company image" />
            <h3>Большой ассортимент</h3>
            <p>Более 1000 товаров</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
