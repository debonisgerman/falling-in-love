import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white navbar-dark bg-dark">
      <Container className="text-light">
        <Row className="py-3">
          <Col md={4}>
            <Image
              src="/images/logo.png"
              alt="logo"
              fluid="true"
              className="logoFooter"
            />
            <div className="my-3">
              <div className="mb-3">
                <Link to="/find-us/lampa">
                  <i className="fas fa-map-marker-alt pr-2"></i>
                  Encuéntranos
                </Link>
              </div>
              <div className="mb-2">
                <a href="tel:913059930" target="_blank" rel="noreferrer">
                  <i className="fas fa-phone pr-2"></i>
                  913059930
                </a>
              </div>
              <div className="mb-2">
                <a
                  href="https://wa.me/message/BC3M5NM7LNWAE1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-whatsapp pr-2"></i>
                  913059930
                </a>
              </div>
              <hr className="bg-light" />
              <div className="mb-2">
                <a
                  href="mailto:fallinginloveperu@outlook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-envelope pr-2"></i>
                  fallinginloveperu@outlook.com
                </a>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <Image
              src="/images/logo.png"
              alt="logo"
              fluid="true"
              className="logoFooter"
              style={{ visibility: "hidden" }}
            />
          </Col>
          <Col md={4}>
            <Image
              src="/images/logo.png"
              alt="logo"
              fluid="true"
              className="logoFooter"
              style={{ visibility: "hidden" }}
            />
            <div className="mb-3">
              <h5 className="my-3">¡Síguenos!</h5>
              <div className="my-2 social-network">
                <Row>
                  <a
                    href="https://www.facebook.com/Falling-in-Love-775386406168379"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-1 ml-3"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "cornflowerblue",
                    }}
                  >
                    <i
                      className="fab fa-facebook py-2 mr-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </a>
                  <a
                    href="https://www.instagram.com/fallinginlove.pe/"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-1 ml-3"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "black",
                    }}
                  >
                    <i
                      className="fab fa-instagram py-2 mr-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </a>
                  <a
                    href="https://wa.me/message/BC3M5NM7LNWAE1"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-1 ml-3"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "green",
                    }}
                  >
                    <i
                      className="fab fa-whatsapp py-2 mr-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </a>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; GIK Digital {new Date().getFullYear()}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
