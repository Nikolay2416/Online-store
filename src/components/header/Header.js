import { useSelector } from 'react-redux';
import {Link, useLocation} from "react-router-dom";

import "./header.scss";
import basketImg from "../../assets/basket-img.png";

const Header = () => {
  let location = useLocation();

  const {addedToCart} = useSelector((state) => state.products);

  return (
    // <div className="header">
    <div className={location.pathname === "/" ? "header linear-gradient" : "header"}>
      <div className="header_body">
        <div className="header_navbar">
          <div className="header_navbar_container">
            <Link  className="header_navbar_container_link emblem" to="/"><h3>NG-shop</h3></Link>
            <div>
              <Link className="header_navbar_container_link" to="/">Главная</Link>
              <Link className="header_navbar_container_link" to="/Shop">Магазин</Link>
              <Link className="header_navbar_container_link" to="/AboutBrand">О бренде</Link>
              <Link className="header_navbar_container_link" to="/Contacts">Контакты</Link>
            </div>
            <div className="header_navbar_container_button-basket">
              <button>+7 (888) 823-54-12</button>
              <Link className="header_navbar_container_link basket" to="/Basket">
                <div className="header_navbar_container_button-basket_link">
                  <div>
                    <img src={basketImg} alt="basketImg" />
                  </div>
                  <div className="header_navbar_container_button-basket_link_quantity">{addedToCart.length}</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;