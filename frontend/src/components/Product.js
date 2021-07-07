import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded w100p">
      <Link to={`/product/${product._id}`} className="img-prod-cont">
        <Card.Img src={product.image} variant="top" className="img-prod" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="p">
          <strong>Categoría: </strong>
          {product.category ? product.category.name : "No definido"}
        </Card.Text>
        <Card.Text as="p">
          <strong>Material: </strong>
          {product.material ? product.material : "No definido"}
        </Card.Text>
        <Card.Text as="p">
          <strong>Código: </strong>
          {product.code ? product.code : "No definido"}
        </Card.Text>
        <Card.Text as="div">
          <Row>
            <Col sm={6} md={6} lg={6} xl={6} xs={6} className="text-center">
              <a
                href="https://wa.me/message/BC3M5NM7LNWAE1"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-whatsapp h2"></i>
              </a>
            </Col>
            <Col sm={6} md={6} lg={6} xl={6} xs={6} className="text-center">
              <a
                href="mailto:fallinginloveperu@outlook.com"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-envelope-open h2"></i>
              </a>
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
