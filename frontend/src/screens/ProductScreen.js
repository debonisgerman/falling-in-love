import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
  Container
} from "react-bootstrap";
import ProductCarousel from "../components/ProductCarousel";
import { listProductsDetails } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Meta from "../components/Meta";

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductsDetails(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <Container>
      <Link className="btn btn-light my-3" to="/shop">
        Volver
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Meta title={product.name} />
          <Row>
            <Col md={6}>
              <Image
                src={product.image}
                alt={product.name}
                fluid="true"
                className="w100p"
              />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Descripción:</strong> {product.description}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Categoría:</strong> {product.category ? product.category.name : 'Sin Definir'}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Material:</strong>{" "}
                  {product.material ? product.material : "Sin Definir"}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Sección:</strong> {product.section}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Código:</strong> {product.code}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col sm={6} className="text-center">
                      <a
                        href="mailto:debonis.german@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-whatsapp h2"></i>
                      </a>
                    </Col>
                    <Col sm={6} className="text-center">
                      <a
                        href="mailto:debonis.german@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fas fa-envelope-open h2"></i>
                      </a>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Cantidad</Col>
                      <Col>
                        <Form.Control
                          type="number"
                          placeholder="Cantidad"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                          min="0"
                        ></Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Button
                      onClick={addToCartHandler}
                      className="btn-block"
                      type="button"
                      disabled={!product.countInStock === 0}
                    >
                      Agregar al Carrito
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <Row>
            <h2>Productos Relacionados</h2>
          </Row>
          <Row className="my-3 py-3">
            <Col md={12}>
              <ProductCarousel />
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default ProductScreen;
