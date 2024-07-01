import React from "react";
import blog1 from "../../assets/blog-image1.png";
import blog2 from "../../assets/blog-image2.png";
import blog3 from "../../assets/blog-image3.png";
import rightArrowBlack from "../../assets/right-arrow-black.svg";
import rightArrowWhite from "../../assets/right-arrow-white.svg";
import arrow from "../../assets/arrow-to-other-page.svg";

const BlogSection = () => {
  return (
    <div className="blog">
      <div className="container">
        <div className="blog_title">
          <h2>Блог</h2>
          <button>
            Перейти в блог
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
        <div className="blog_cards">
          <div className="blog_card">
            <img src={blog1} alt="our blogs" />
            <div className="blog_card_title">
              <h3>Как правильно освещать дом снаружи?</h3>
              <img src={arrow} alt="arrow" />
            </div>
            <p>02.07.2024</p>
          </div>
          <div className="blog_card">
            <img src={blog2} alt="our blogs" />
            <div className="blog_card_title">
              <h3>Как правильно освещать дом снаружи?</h3>
              <img src={arrow} alt="arrow" />
            </div>
            <p>02.07.2024</p>
          </div>
          <div className="blog_card">
            <img src={blog3} alt="our blogs" />
            <div className="blog_card_title">
              <h3>Как правильно освещать дом снаружи?</h3>
              <img src={arrow} alt="arrow" />
            </div>
            <p>02.07.2024</p>
          </div>
        </div>
        <div className="blog_texts">
          <h2>Производство светильников</h2>
          <div className="blog_desc">
            <p>
              Интернет-магазин NORNLIGHT предлагает широкий ассортимент
              светильников для освещения вашего дома или офиса. У нас вы найдете
              разнообразные модели светильников, от современных и стильных до
              классических и элегантных. Мы предлагаем качественные и надежные
              светильники от лучших производителей, которые подарят вам комфорт
              и уют.
            </p>
            <p>
              Покупая светильники в нашем интернет-магазине, вы получаете
              отличное соотношение цены и качества. Мы осуществляем доставку по
              всей России, чтобы каждый клиент мог насладиться прекрасным светом
              и удобством покупки онлайн. Обратитесь к нам сегодня и превратите
              ваш дом в оазис тепла и света с NORNLIGHT!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
