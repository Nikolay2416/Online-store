import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

import "./contentHome.scss";
import "swiper/css";

import quality from "../../assets/quality_img.png";
import speed from "../../assets/speed_img.png";
import responsibility from "../../assets/responsibility_img.png";
import team1 from "../../assets/team1.png";
import team2 from "../../assets/team2.png";
import team3 from "../../assets/team3.png";
import { Link } from 'react-router-dom';

const ContentHome = () => {

  register();

  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
      injectStyles: [
        `
          .contentHome_team {
            width: 350px;
          }
          .swiper-button-next,
          .swiper-button-prev {
            color: #000;
          }
          .swiper-pagination-bullet{
            background-color: #000;
          }
        `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <div className="contentHome">
      <h2 className="contentHome_h2">Что для нас важно</h2>
      <div className="contentHome_advantages">
        <div className="contentHome_advantages_advantage">
          <div className="contentHome_advantages_advantage_img">
            <img src={quality} alt="quality-img" />
          </div>
          <h3>Качество</h3>
          <p>Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества</p>
        </div>
        <div className="contentHome_advantages_advantage">
          <div className="contentHome_advantages_advantage_img">
            <img src={speed} alt="speed-img" />
          </div>
          <h3>Скорость</h3>
          <p>Благодаря отлаженной системе в NG-shop мы можем отшивать до 20-ти единиц продукции в наших собственных цехах</p>
        </div>
        <div className="contentHome_advantages_advantage">
          <div className="contentHome_advantages_advantage_img">
            <img src={responsibility} alt="responsibility-img" />
          </div>
          <h3>Ответственность</h3>
          <p>Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это NG-shop</p>
        </div>
      </div>

      <h2 className="contentHome_h2">Команда мечты NG-shop</h2>
      <div className="contentHome_team">
        <div className="contentHome_team_swiper-container">
          <swiper-container className="contentHome_team" ref={swiperRef} init="false">
            <swiper-slide>
              <img src={team1} alt="team1" />
            </swiper-slide>
            <swiper-slide>
              <img src={team2} alt="team2" />
            </swiper-slide>
            <swiper-slide>
              <img src={team3} alt="team3" />
            </swiper-slide>
          </swiper-container>
        </div>

        <div className="contentHome_team_description">
          <h3>Наша команда</h3>
          <p>Каждая девушка уникальна. Однако, все схожи в миллионе мелочей.</p>
          <p>NG-shop ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.</p>
          <div className="contentHome_team_description_link-body">
            <Link className="contentHome_team_description_link" to="/AboutBrand">Подробнее о бренде</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHome;