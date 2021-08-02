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
import Meta from "../components/Meta";
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
      <Meta />
      <h1>Pedido Nro. {order.billNumber}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Envío</h2>
              <p><strong>Nombre: </strong> {order.shippingAddress.name}</p>
              <p><strong>Email: </strong> {order.shippingAddress.email}</p>
              <p><strong>Dirección:</strong> {order.shippingAddress.address}</p>
              <p><strong>Departamento:</strong> {order.shippingAddress.department}</p>
              <p><strong>Provincia:</strong> {order.shippingAddress.province}</p>
              <p><strong>Teléfono:</strong> {order.shippingAddress.phone}</p>
              <p><strong>Factura:</strong> {order.shippingAddress.bill ? 'Si' : 'No'}</p>
              <p><strong>Razón Social:</strong> {order.shippingAddress.socialReason ? order.shippingAddress.socialReason : '-'}</p>
              <p><strong>RUC:</strong> {order.shippingAddress.ruc ? order.shippingAddress.ruc : '-'}</p>
              {order.isPriced ? (
                <Message variant="success">
                  Pagado el {(new Date(order.pricedAt)).toLocaleString()}
                </Message>
              ) : (
                <Message variant="secondary">No pagado</Message>
              )}
              {order.isDelivered ? (
                <Message variant="success">
                  Entregado el {(new Date(order.deliveredAt)).toLocaleString()}
                </Message>
              ) : (
                <Message variant="secondary">En Camino</Message>
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
                          <p className="mt-2 mb-1">
                            <strong>Talle: {item.sizeName}</strong>
                          </p>
                          <p>
                            <strong>color: {item.colorName}</strong>
                          </p>
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
                    Marcar como pagado{" "}
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
