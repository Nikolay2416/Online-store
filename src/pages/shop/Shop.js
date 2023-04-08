import ShopСollection from "../../components/shopCollection/ShopCollection";
import ShopFilterProducts from "../../components/shopFilterProducts/ShopFilterProducts";
import {Link} from "react-router-dom";

import "./shop.scss"

const Shop = () => {
  return (
    <div  className="shop-body">
      <h1 className="shop-body_heading">Магазин</h1>
      <p className="shop-body_navigation">
        <Link className="shop-body_navigation_link" to="/">Главная</Link> - <span>Магазин</span>
      </p>
      <ShopFilterProducts/>
      <ShopСollection/>
    </div>
  )
}

export default Shop;