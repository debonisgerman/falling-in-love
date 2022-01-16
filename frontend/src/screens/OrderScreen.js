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
  shipOrder,
} from "../actions/orderActions";
import {
  ORDER_DELIVER_RESET,
  ORDER_PRICED_RESET,
  ORDER_SHIPPED_RESET
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

  const orderShipped = useSelector((state) => state.orderShipped);
  const { loading: loadingShipped, success: successShipped } = orderShipped;

  useEffect(() => {
    if (!order || order._id !== orderId)
    {
      dispatch(getOrderDetails(orderId));
    }

    if (successDeliver)
    {
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(getOrderDetails(orderId));
    }
    if (successShipped)
    {
      dispatch({ type: ORDER_SHIPPED_RESET });
      dispatch(getOrderDetails(orderId));
    }
    if (successPriced)
    {
      dispatch({ type: ORDER_PRICED_RESET });
      dispatch(getOrderDetails(orderId));
    }
  }, [dispatch, order, orderId, successDeliver, history, successPriced, successShipped]);

  const deliverHandler = () => {
    dispatch(deliverOrder(order));
  };

  const pricedHandler = () => {
    dispatch(priceOrder(order));
  };

  const shippedHandler = () => {
    dispatch(shipOrder(order));
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
        <Col md={12} lg={8} xl={8}>
          <ListGroup variant="flush">
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
                            <strong>Talla: {item.sizeName}</strong>
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
            <ListGroup.Item>
              <h2>Envío</h2>
              <p><strong>Nombre: </strong> {order.shippingAddress.name}</p>
              <p><strong>Email: </strong> {order.shippingAddress.email}</p>
              <p><strong>Dirección:</strong> {order.shippingAddress.address}</p>
              <p><strong>Departamento:</strong> {order.shippingAddress.department}</p>
              <p><strong>Provincia:</strong> {order.shippingAddress.province}</p>
              <p><strong>Distrito:</strong> {order.shippingAddress.district}</p>
              <p><strong>Teléfono:</strong> {order.shippingAddress.phone}</p>
              <p><strong>Comprobante:</strong> {order.shippingAddress.bill ? 'Factura' : 'Boleta'}</p>
              {order.shippingAddress.bill && (
                <>
                  <p><strong>Razón Social:</strong> {order.shippingAddress.socialReason ? order.shippingAddress.socialReason : '-'}</p>
                  <p><strong>RUC:</strong> {order.shippingAddress.ruc ? order.shippingAddress.ruc : '-'}</p>
                </>
              )}
              {order.paymentMethod === "TransferenciaYapePlin" && !order.isPriced && (
                <>
                  <hr />
                  <h4>Datos para el pago:</h4>
                  <p><b>Titular</b>: Andrea Estefania Cueva Bedia</p>
                  <div>
                    <div>
                      <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Col md={3} lg={3} xl={3} className="text-center yape-mobile-first">
                          <Image
                            src="/images/plinlogo.png"
                            alt="logo"
                            fluid="true"
                            style={{ width: 150 }}
                          />
                        </Col>
                        <Col md={3} lg={3} xl={3} className="text-center yape-mobile-second">
                          <Image
                            src="/images/plin.png"
                            alt="logo"
                            fluid="true"
                            style={{ width: 150 }}
                          />
                        </Col>
                        <Col md={2} lg={2} xl={2} className="text-center yape-mobile-first">
                          <Image
                            src="/images/yapelogo.png"
                            alt="logo"
                            fluid="true"
                            style={{ width: 150 }}

                          />
                        </Col>
                        <Col md={4} lg={3} xl={3} className="text-center yape-mobile-second">
                          <Image
                            src="/images/yape.png"
                            alt="logo"
                            fluid="true"
                            style={{ width: 150 }}
                          />
                        </Col>
                      </Row>
                    </div>
                    <div>
                      <h5>Transferencia Bancaria - Interbank</h5>
                      <p>
                        <b>Empresa:</b> Falling in Love SAC
                        <br />
                        <b>Cuenta Corriente Soles:</b> 200-3003735131 / CCI: 00320000300373513136
                        <br />
                        <b>Cuenta Corriente Dólares:</b> 200-3003735149 / CCI: 003-200-003003735149-38
                      </p>
                    </div>
                    <div>
                      <b style={{ fontSize: '1.3rem', color: '#780028', fontWeight: 'bold' }}>
                        Una vez realizado el pago, envíanos el comprobante:
                      </b>
                      <br />
                      <br />
                      <a
                        className="btn btn-primary rounded center"
                        href={`https://wa.me/+51913059930?text=Hola,%20te%20envío%20el%20comprobante%20del%20pedido%20Nro.%20${order.billNumber}`}
                        target="_blank"
                        rel="noreferrer"
                        style={{ display: 'flex', width: 175, justifyContent: 'center', alignItems: 'center', paddingBottom: 8 }}
                      >
                        <b>
                          <i
                            className="fab fa-whatsapp pt-2"
                            style={{ fontSize: "25px" }}
                          ></i>
                        </b>
                        <b
                          style={{ marginLeft: 8, marginTop: 4 }}>
                          ¡Por Whatsapp!
                        </b>
                      </a>
                    </div>
                    <hr />
                  </div>
                </>
              )}
              {order.isPriced ? (
                <Message variant="success">
                  Pagado el {(new Date(order.pricedAt)).toLocaleString()}
                </Message>
              ) : (
                <Message variant="secondary">No pagado</Message>
              )}
              {order.isShipping ? (
                <Message variant="success">
                  En camino desde {(new Date(order.pricedAt)).toLocaleString()}
                </Message>
              ) : (
                <Message variant="secondary">Esperando para enviar</Message>
              )}
              {order.isDelivered ? (
                <Message variant="success">
                  Entregado el {(new Date(order.deliveredAt)).toLocaleString()}
                </Message>
              ) : (
                <Message variant="secondary">{order.isShipping ? 'En Camino' : 'Esperando que se envíe'}</Message>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={12} lg={4} xl={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Resumen del Pedido</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>
                    <strong>
                      {order.orderItems.reduce(
                        (acc, item) => +acc + +item.qty,
                        0
                      )}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Productos</Col>
                  <Col><strong>{order.orderItems.length}</strong></Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col><strong>S/. {order.totalPrice}</strong></Col>
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
              {userInfo && userInfo.isAdmin && !order.isShipping && (
                <ListGroup.Item>
                  <Button
                    type="button"
                    className="btn btn-block"
                    disabled={!order.isPriced}
                    onClick={shippedHandler}
                  >
                    Marcar en camino{" "}
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
                    disabled={!order.isPriced || !order.isShipping}
                  >
                    Marcar como enviado{" "}
                  </Button>
                </ListGroup.Item>
              )}
              {loadingDeliver && <Loader />}
            </ListGroup>
            {userInfo && userInfo.isAdmin && (
              <Container className="text-center">
                <Button
                  type="button"
                  className="btn px-5"
                  onClick={() => history.goBack()}
                >
                  Volver
                </Button>
              </Container>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderScreen;
