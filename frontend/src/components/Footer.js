import React from "react";
import { ListGroup, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark">
      <Container className="text-light">
        <Row className="py-3">
          <Col md={4}>
            <h5>Links</h5>
            <hr className="bg-light" />
            <ListGroup variant="flush">
              <ListGroup.Item variant="dark">
                <Link to="/shop">Shop</Link>
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                <Link to="/shop">Shop</Link>
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                <Link to="/shop">Shop</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <hr className="bg-light" />
            <ListGroup variant="flush">
              <ListGroup.Item variant="dark">
                <Link to="/shop">Shop</Link>
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                <Link to="/shop">Shop</Link>
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                <Link to="/shop">Shop</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <h5>Social Media</h5>
            <hr className="bg-light" />
            <ListGroup variant="flush">
              <ListGroup.Item variant="dark">
                <Link to="/shop">Shop</Link>
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                <Link to="/shop">Shop</Link>
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                <Link to="/shop">Shop</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">Copyright &copy; GIK Digital</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
