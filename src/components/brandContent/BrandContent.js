import {Link} from "react-router-dom";

import "./brandContent.scss";
import brandBlockOneImg from "../../assets/brand_blockOne_img.png";
import brandBlockTwoImg from "../../assets/brand_blockTwo_img.png";

const BrandContent = () => {
  return (
    <div  className="brand">
      <h1 className="brand_heading">О бренде</h1>
      <p className="brand_navigation">
        <Link className="brand_navigation_link" to="/">Главная</Link> - <span>О бренде</span>
      </p>

      <div className="brand_main">
        <div className="brand_main_blockOne">
          <div className="brand_main_blockOne_img">
            <img src={brandBlockOneImg} alt="brandBlockOneImg" />
          </div>
          <div className="brand_main_blockOne_text">
            <h3>Идея и женщина</h3>
            <p>NG-shop была основана в 2010-ом и стала одной из самых успешных компаний нашей страны. Как и многие итальянские фирмы, NG-shop остаётся семейной компанией, хотя ни один из членов семьи не является модельером.</p>
            <p>Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний. </p>
          </div>
        </div>
        <div className="brand_main_blockTwo">
          <div className="brand_main_blockTwo_text">
            <h3>Магия в деталях</h3>
            <p>Первый магазин NG-shop был открыт в маленьком городке на севере страны в 2010-ом году. Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей.</p>
            <p>Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало. </p>
          </div>
          <div className="brand_main_blockTwo_img">
            <img src={brandBlockTwoImg} alt="brandBlockTwoImg" />
          </div>
        </div>
      </div>


      <div className="brand_button">
        <Link to="/Shop">
          <button>Перейти в магазин</button>
        </Link>
      </div>
    </div>
  );
};

export default BrandContent;