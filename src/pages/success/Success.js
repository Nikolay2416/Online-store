import {Link} from "react-router-dom";

import "./success.scss";
import checkMark from "../../assets/checkMark.png"

const Success = () => {
  return (
    <div className="success-body">
      <h1 className="success-body_heading">Заказ получен</h1>
      <p className="success-body_navigation">
        <Link className="success-body_navigation_link" to="/">Главная</Link> - <span>Заказ получен</span>
      </p>
      <div className="success-body_order">
        <div className="success-body_order_inf">
          <div className="success-body_order_inf_body">
            <div className="">
              <img src={checkMark} alt="checkMark" />
            </div>
            <div>
              <p className="success-body_order_inf_p-top">Заказ успешно оформлен</p>
              <p className="success-body_order_inf_p-bottom">Мы свяжемся с вами в ближайшее время!</p>
            </div>
          </div>
        </div>
        <div className="">
          <Link className="" to="/">
            <button className="success-body_order_link_button">Перейти на главную</button>
          </Link> 
        </div>
      </div>
    </div>
  );
};

export default Success;