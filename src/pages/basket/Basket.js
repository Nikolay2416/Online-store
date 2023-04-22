import {Link} from "react-router-dom";
import Cart from "../../components/cart/Cart";

import "./basket.scss"

const Basket = () => {
  return (
    <div  className="basket-header">
      <h1 className="basket-header_heading">Корзина</h1>
      <p className="basket-header_navigation">
        <Link className="basket-header_navigation_link" to="/">Главная</Link> - <span>Корзина</span>
      </p>
      <Cart/>
  </div>
  )
}

export default Basket;