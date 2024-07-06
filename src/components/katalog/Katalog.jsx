import React from "react";
import rightArrow from "../../assets/right-arrow.svg";
import rightArrowBlack from "../../assets/right-arrow-black.svg";
import rightArrowWhite from "../../assets/right-arrow-white.svg";
import katalog1 from "../../assets/katalog1.png";
import katalog2 from "../../assets/katalog2.png";
import katalog3 from "../../assets/katalog3.png";
import katalog4 from "../../assets/katalog4.png";
import katalog5 from "../../assets/katalog5.png";
import katalog6 from "../../assets/katalog6.png";

const Katalog = () => {
  return (
    <div className="katalog">
      <div className="container">
        <div className="katalog_title">
          <h2>Каталог</h2>
          <button>
            Весь каталог
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
        <div className="katalog_cards">
          <div className="katalog_card">
            <div className="katalog_texts">
              <p>Люстры</p>
              <h4>
                От 540₽ <img src={rightArrow} alt="" />
              </h4>
            </div>
            <img src={katalog1} alt="katalog" />
          </div>
          <div className="katalog_card">
            <div className="katalog_texts">
              <p>Светильники</p>
              <h4>
                От 540₽ <img src={rightArrow} alt="" />
              </h4>
            </div>
            <img src={katalog2} alt="katalog" />
          </div>
          <div className="katalog_card">
            <div className="katalog_texts">
              <p>Бра</p>
              <h4>
                От 540₽ <img src={rightArrow} alt="" />
              </h4>
            </div>
            <img className="third-image" src={katalog3} alt="katalog" />
          </div>
          <div className="katalog_card">
            <div className="katalog_texts">
              <p>Торшеры</p>
              <h4>
                От 540₽ <img src={rightArrow} alt="" />
              </h4>
            </div>
            <img src={katalog4} alt="katalog" />
          </div>
          <div className="katalog_card">
            <div className="katalog_texts">
              <p>Настольные лампы</p>
              <h4>
                От 540₽ <img src={rightArrow} alt="" />
              </h4>
            </div>
            <img src={katalog5} alt="katalog" />
          </div>
          <div className="katalog_card">
            <div className="katalog_texts">
              <p>Споты</p>
              <h4>
                От 540₽ <img src={rightArrow} alt="" />
              </h4>
            </div>
            <img src={katalog6} alt="katalog" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Katalog;
