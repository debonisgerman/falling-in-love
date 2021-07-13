import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";

const Product = ({ product }) => {
  const productImage = product.variants &&
    product.variants[0] &&
    product.variants[0].images.length > 0 ?
    product.variants[0].images[0] :
    '/images/logo.png';

    const handleLink = e => {
      window.location.href = window.location.href.split("/shop").join("") + `/product/${product._id}`;
    }

  return (
    <Card className="my-3 p-3 rounded w100p">
      {
        product.variants &&
          product.variants.length == 0 ? (<div class="no-stock-bow">Sin Stock</div>) : (<></>)
      }
      <Link onClick={handleLink} className="img-prod-cont">
        <Card.Img src={productImage} variant="top" className="img-prod" />
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
          {product.material ? product.material.reduce((accumulator, currentValue) => accumulator = accumulator + ", " + currentValue.name, "").slice(2) : "No definido"}
        </Card.Text>
        <Card.Text as="p">
          <strong>Precio: </strong>
          {product.price ? ` S./ ${product.price}` : "No definido"}
        </Card.Text>
        <Card.Text as="p">
          <strong>Talles: </strong>
          {
            product.variants &&
              product.variants.length > 0 ?
              [...new Set(product.variants.reduce((accumulator, currentValue) => accumulator = accumulator + ", " + currentValue.sizes.reduce((ac, cv) => ac + ", " + cv.size.name, "").slice(2), "").slice(2).split(", "))].join(", ") :
              'Sin Stock'
          }
        </Card.Text>
        <Card.Text as="p">
          <Row className="align-items-center">
            {
              product.variants && product.variants.length > 0 && product.variants.map((variant) => (
                <Col className="text-center">
                  <div style={{
                    width: '25px',
                    height: '25px',
                    borderRadius: '50%',
                    backgroundColor: variant.color.color,
                    margin: '0 auto',
                  }}></div>
                  <div>{variant.color.name}</div>
                </Col>
              ))
            }
          </Row>
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
