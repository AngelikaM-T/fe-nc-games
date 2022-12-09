import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { UserContext } from "../context/UserContext";

const NavBar = () => {

  const { activeUser } = useContext(UserContext);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categories" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/categories/strategy">Strategy</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/categories/hidden-roles">Hidden-Roles</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/categories/dexterity">Dexterity</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/categories/push-your-luck">Push-Your-Luck</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/categories/roll-and-write">Roll-And-Write</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/categories/deck-building">Deck-Building</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/categories/enginge-building">Engine-Building</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/signin">Sign In</Nav.Link>
            <img
              className="user-avatar"
              src={activeUser.avatar_url}
              alt={activeUser.name}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
