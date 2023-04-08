import {Link} from "react-router-dom";
import {Navbar, Nav, Container, Button} from "react-bootstrap";

const Menu = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Link className="h4 link-dark text-decoration-none" to="/">Womazing</Link>
        <Nav className="me-centr">
          <Link to="/" className="ms-3 me-3 link-dark text-decoration-none">Главная</Link>
          <Link className="ms-3 me-3 link-dark text-decoration-none" to="/Shop">Магазин</Link>
          <Link className="ms-3 me-3 link-dark text-decoration-none" to="/AboutBrand">О бренде</Link>
          <Link className="ms-3 me-3 link-dark text-decoration-none" to="/Contacts">Контакты</Link>
        </Nav>
        <Nav className="ml-auto">
          <Button variant="light">+7 (000) 000-00-00</Button>
          <Button variant="light">Корзина</Button>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Menu;