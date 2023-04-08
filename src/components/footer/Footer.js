import {Link} from "react-router-dom";

import "./footer.scss"
import visaMastercard from '../../assets/visa-mastercard.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_body">
        <div className="footer_navbar">
          <div className="footer_navbar_container">
            <Link  className="footer_navbar_container_link m-zero" to="/">NG-shop</Link>
            <div >
              <Link className="footer_navbar_container_link" to="/">Главная</Link>
              <Link className="footer_navbar_container_link" to="/Shop">Магазин</Link>
              <Link className="footer_navbar_container_link" to="/AboutBrand">О бренде</Link>
              <Link className="footer_navbar_container_link" to="/Contacts">Контакты</Link>
            </div>
            <div >
              <p >+7 (000) 000-00-00</p>
              <p >hello@NG-shop.com</p>
            </div>
          </div>
        </div>
        <div className="footer_inf">
          <div className="">
            <p>© Все права защищены</p>
            <p>Политика конфиденциальности</p>
            <p>Публичная оферта</p>
          </div>
          <div className="">
            <img src={visaMastercard} alt="visa" srcset="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;