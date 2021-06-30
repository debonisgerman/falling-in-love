import React, { useEffect } from "react";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Button,
  Container,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import {
  getOrderDetails,
  deliverOrder,
  priceOrder,
} from "../actions/orderActions";
import {
  ORDER_DELIVER_RESET,
  ORDER_PRICED_RESET,
} from "../constants/orderConstants";

const OrderScreen = ({ match, history }) => {
  const orderId = match.params.id;

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

  const orderPriced = useSelector((state) => state.orderPriced);
  const { loading: loadingPriced, success: successPriced } = orderPriced;

  useEffect(() => {
    if (!order || order._id !== orderId) {
      dispatch(getOrderDetails(orderId));
    }

    if (successDeliver) {
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(getOrderDetails(orderId));
    }
    if (successPriced) {
      dispatch({ type: ORDER_PRICED_RESET });
      dispatch(getOrderDetails(orderId));
    }
  }, [dispatch, order, orderId, successDeliver, history, successPriced]);

  const deliverHandler = () => {
    dispatch(deliverOrder(order));
  };

  const pricedHandler = () => {
    dispatch(priceOrder(order));
  };

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Container>
      <h1>Pedido {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Envío</h2>
              <p>
                <strong>Nombre: </strong> {order.shippingAddress.name}
              </p>
              <p>
                <strong>Email: </strong>{" "}
                <a
                  href={`mailto:${order.shippingAddress.email}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {order.shippingAddress.email}
                </a>
              </p>
              <p>
                <strong>Dirección: </strong>
                {order.shippingAddress.address}, {order.shippingAddress.city}{" "}
                {order.shippingAddress.postalCode},{" "}
                {order.shippingAddress.country}
              </p>
              {order.shippingAddress.socialReason ? (
                <p>
                  <strong>Razón Social: </strong>
                  {order.shippingAddress.socialReason}
                </p>
              ) : (
                ""
              )}
              {order.shippingAddress.ruc ? (
                <p>
                  <strong>RUC: </strong> {order.shippingAddress.ruc}
                </p>
              ) : (
                ""
              )}
              {order.isPriced ? (
                <Message variant="success">
                  Cotizado el {order.pricedAt}
                </Message>
              ) : (
                <Message variant="danger">No cotizado</Message>
              )}
              {order.isDelivered ? (
                <Message variant="success">
                  Enviado el {order.deliveredAt}
                </Message>
              ) : (
                <Message variant="danger">No enviado</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Items del Pedido</h2>
              {order.orderItems.length === 0 ? (
                <Message>El pedido está vacío</Message>
              ) : (
                <ListGroup variant="flush">
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={2}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid="true"
                            rounded
                            className="w100p"
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>Cantidad: {item.qty}</Col>
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
                    {order.orderItems.reduce(
                      (acc, item) => +acc + +item.qty,
                      0
                    )}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Productos</Col>
                  <Col>{order.orderItems.length}</Col>
                </Row>
              </ListGroup.Item>
              {userInfo && userInfo.isAdmin && !order.isPriced && (
                <ListGroup.Item>
                  <Button
                    type="button"
                    className="btn btn-block"
                    onClick={pricedHandler}
                  >
                    Marcar como cotizado{" "}
                  </Button>
                </ListGroup.Item>
              )}
              {loadingPriced && <Loader />}
              {userInfo && userInfo.isAdmin && !order.isDelivered && (
                <ListGroup.Item>
                  <Button
                    type="button"
                    className="btn btn-block"
                    onClick={deliverHandler}
                    ƒ
                  >
                    Marcar como enviado{" "}
                  </Button>
                </ListGroup.Item>
              )}
              {loadingDeliver && <Loader />}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderScreen;
