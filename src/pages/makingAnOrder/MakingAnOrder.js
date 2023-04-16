import {Link} from "react-router-dom";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm"

import "./makingAnOrder.scss";

const MakingAnOrder = () => {
  return (
    <div className="makingAnOrder">
      <h1 className="makingAnOrder_heading">Оформление заказа</h1>
      <p className="makingAnOrder_navigation">
        <Link className="makingAnOrder_navigation_link" to="/">Главная</Link> - <span>Оформление заказа</span>
      </p>
      <CheckoutForm/>
    </div>
  );
};

export default MakingAnOrder;