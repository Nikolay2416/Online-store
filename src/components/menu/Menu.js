import {Navbar, Nav, Container, Button} from "react-bootstrap"

const Menu = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Womazing</Navbar.Brand>
        <Nav className="me-centr">
          <Nav.Link href="#home">Главная</Nav.Link>
          <Nav.Link href="#features">Магазин</Nav.Link>
          <Nav.Link href="#pricing">О бренде</Nav.Link>
          <Nav.Link href="#pricing">Контакты</Nav.Link>
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