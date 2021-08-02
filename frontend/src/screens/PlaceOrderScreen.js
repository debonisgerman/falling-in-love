import React, { useEffect } from "react";
import {
  Button,
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Container,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Meta from "../components/Meta";
import CheckoutSteps from "../components/CheckoutSteps";
import { Link } from "react-router-dom";
import { createOrder } from "../actions/orderActions";
import { CART_RESET_ITEM } from "../constants/cartConstants";

const PlaceOrderScreen = ({ history }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  cart.shippingPrice = addDecimals(15);
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice)
  ).toFixed(2);

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
    }
    // eslint-disable-next-line
  }, [history, success]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        totalPrice: cart.totalPrice,
      })
    );
    dispatch({ type: CART_RESET_ITEM });
  };

  return (
    <Container>
      <Meta />
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Envío</h2>
              <p><strong>Nombre: </strong> {cart.shippingAddress.name}</p>
              <p><strong>Email: </strong> {cart.shippingAddress.email}</p>
              <p><strong>Dirección:</strong> {cart.shippingAddress.address}</p>
              <p><strong>Departamento:</strong> {cart.shippingAddress.department}</p>
              <p><strong>Provincia:</strong> {cart.shippingAddress.province}</p>
              <p><strong>Teléfono:</strong> {cart.shippingAddress.phone}</p>
              <p><strong>Factura:</strong> {cart.shippingAddress.bill ? 'Si' : 'No'}</p>
              <p><strong>Razón Social:</strong> {cart.shippingAddress.socialReason ? cart.shippingAddress.socialReason : '-'}</p>
              <p><strong>RUC:</strong> {cart.shippingAddress.ruc ? cart.shippingAddress.ruc : '-'}</p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Items del Pedido</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Tu carrito esta vacío</Message>
              ) : (
                <ListGroup variant="flush">
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid="true"
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                          <p className="mt-2 mb-1">
                            <strong>Talle: {item.sizeName}</strong>
                          </p>
                          <p>
                            <strong>color: {item.colorName}</strong>
                          </p>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ${item.price} = S./
                          {(item.qty * item.price).toFixed(2)}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Resumen del Pedido</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>
                    <strong>S./ {cart.itemsPrice}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Costo de Envío</Col>
                  <Col><strong>S./ {cart.shippingPrice}</strong></Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col><strong>S./ {cart.totalPrice}</strong></Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Método de Pago</Col>
                  <Col><strong>{cart.paymentMethod}</strong></Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {error && <Message variant="danger">{error}</Message>}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}
                >
                  Hacer Pedido
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PlaceOrderScreen;
