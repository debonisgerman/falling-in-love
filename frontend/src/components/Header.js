import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <Image
                src="/images/logo.png"
                alt="logo"
                fluid="true"
                className="logoHeader"
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/about-us">
                <Nav.Link>
                  <i className="fas fa-users"></i> Nosotros
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/find-us">
                <Nav.Link>
                  <i className="fas fa-map-marker-alt"></i> Encuéntranos
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/shop">
                <Nav.Link>
                  <i className="fas fa-store-alt"></i> Tienda
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart" /> Carrito
                </Nav.Link>
              </LinkContainer>
              {userInfo && userInfo.isAdmin && (
                <NavDropdown
                  title={
                    <span>
                      <i className="fas fa-cog"></i> Admin
                    </span>
                  }
                  id="adminmenu"
                >
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>
                      <i className="fas fa-users"></i> Usuarios
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productList">
                    <NavDropdown.Item>
                      <i className="fas fa-tools"></i> Productos
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderList">
                    <NavDropdown.Item>
                      <i className="fas fa-shipping-fast"></i> Pedidos
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/bannerlist">
                    <NavDropdown.Item>
                      <i className="far fa-images"></i> Banners
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/categorylist">
                    <NavDropdown.Item>
                      <i className="far fa-file-plus"></i> Categorías
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/materiallist">
                    <NavDropdown.Item>
                      <i className="far fa-file-plus"></i> Materiales
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/sectionlist">
                    <NavDropdown.Item>
                      <i className="far fa-file-plus"></i> Secciones
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/colorlist">
                    <NavDropdown.Item>
                      <i className="far fa-file-plus"></i> Colores
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/sizelist">
                    <NavDropdown.Item>
                      <i className="far fa-file-plus"></i> Talles
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
              {userInfo ? (
                <NavDropdown
                  title={
                    <span>
                      <i className="fas fa-user"></i> {userInfo.name}
                    </span>
                  }
                  id="username"
                >
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>
                      <i className="fas fa-user-edit"></i> Perfil
                    </NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    <i className="fas fa-sign-out-alt"></i> Salir
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user" /> Iniciar Sesión
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
