import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import {Navbar, Nav, Container, Button} from "react-bootstrap";

import "./header.scss"

const Header = () => {

  const {addedToCart} = useSelector((state) => state.products);

  return (
    <Navbar className="header" variant="light">
      <Container className="header_container">
        <Link className="h4 link-dark text-decoration-none" to="/">Womazing</Link>
        <Nav className="me-centr">
          <Link to="/" className="ms-3 me-3 link-dark text-decoration-none">Главная</Link>
          <Link className="ms-3 me-3 link-dark text-decoration-none" to="/Shop">Магазин</Link>
          <Link className="ms-3 me-3 link-dark text-decoration-none" to="/AboutBrand">О бренде</Link>
          <Link className="ms-3 me-3 link-dark text-decoration-none" to="/Contacts">Контакты</Link>
        </Nav>
        <Nav className="ml-auto">
          <Button variant="light">+7 (000) 000-00-00</Button>
          <Link className="ms-3 me-3 mt-2 link-dark text-decoration-none" to="/Basket">Корзина {addedToCart.length}</Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header;