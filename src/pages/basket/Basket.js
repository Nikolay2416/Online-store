import {Link} from "react-router-dom";
import Cart from "../../components/cart/Cart"

const Basket = () => {
  return (
    <div  className="shop-body">
      <h1 className="shop-body_heading">Корзина</h1>
      <p className="shop-body_navigation">
        <Link className="shop-body_navigation_link" to="/">Главная</Link> - <span>Корзина</span>
      </p>

      <Cart/>
  </div>
  )
}

export default Basket;