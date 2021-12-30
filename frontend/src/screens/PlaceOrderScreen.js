import React, { useEffect, useState } from "react";
import {
  Button,
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Container,
  Modal
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Meta from "../components/Meta";
import CheckoutSteps from "../components/CheckoutSteps";
import { Link } from "react-router-dom";
import { createOrder } from "../actions/orderActions";
import { CART_RESET_ITEM } from "../constants/cartConstants";
import IziPay from "../components/IzyPay";

const PlaceOrderScreen = ({ history }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cart = useSelector((state) => state.cart);

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  cart.shippingPrice = cart.shippingAddress && cart.shippingAddress.province && cart.shippingAddress.province.toUpperCase() !== 'LIMA' ? 15 : 10;
  // cart.totalPrice = (
  //   Number(cart.itemsPrice) +
  //   Number(cart.shippingPrice)
  // ).toFixed(2);
  cart.totalPrice = (Number(cart.itemsPrice)).toFixed(2)

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success)
    {
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

  const onSuccessHandler = (data) => {
    try
    {
      const uuid = JSON.parse(data.request.__sentry_xhr__.body).clientAnswer.transactions[0].uuid
      dispatch(
        createOrder({
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          paymentMethod: cart.paymentMethod,
          itemsPrice: cart.itemsPrice,
          shippingPrice: cart.shippingPrice,
          totalPrice: cart.totalPrice,
          isPriced: true,
          pricedAt: new Date(),
          uUId: uuid,
        })
      );
      dispatch({ type: CART_RESET_ITEM });
    }
    catch {
      dispatch(
        createOrder({
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          paymentMethod: cart.paymentMethod,
          itemsPrice: cart.itemsPrice,
          shippingPrice: cart.shippingPrice,
          totalPrice: cart.totalPrice,
          isPriced: true,
          pricedAt: new Date(),
        })
      );
      dispatch({ type: CART_RESET_ITEM });
    }

  }

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
              <p><strong>Distrito:</strong> {cart.shippingAddress.district}</p>
              <p><strong>Teléfono:</strong> {cart.shippingAddress.phone}</p>
              <p><strong>Comprobante:</strong> {cart.shippingAddress.bill ? 'Factura' : 'Boleta'}</p>
              {cart.shippingAddress.bill && (
                <>
                  <p><strong>Razón Social:</strong> {cart.shippingAddress.socialReason ? cart.shippingAddress.socialReason : '-'}</p>
                  <p><strong>RUC:</strong> {cart.shippingAddress.ruc ? cart.shippingAddress.ruc : '-'}</p>
                </>
              )}
              <div className="mb-2">
                <a
                  href="#"
                  rel="noreferrer"
                  onClick={handleShow}
                >
                  <i className="fas fa-book pr-2"></i>
                  Políticas de Envío
                </a>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Body>
                    <h4><b>ENVÍOS Y ENTREGAS</b></h4>
                    <h6 className="mb-1 mt-4">LIMA METROPOLITANA:</h6>
                    <p className="mb-0">Todas las compras por montos menores a S/150 tendrán un costo de envío de S/10. <b>Envíos gratis por compras mayores a S/150.</b></p>
                    <p className="mb-0">Tiempo de entrega de 3 días hábiles contados desde la fecha que realizaste tu compra, en el horario de 9am a 7pm.</p>
                    <h6 className="mb-1 mt-4">RECÍBELO HASTA EN 24 HORAS - LIMA METROPOLITANA:</h6>
                    <p className="mb-0">Tiene un costo fijo de S/15.</p>
                    <p className="mb-0">Tiempo de entrega dentro de las siguientes 24 horas hábiles. (Consulta si tu distrito está incluido dentro de la cobertura)</p>
                    <h6 className="mb-1 mt-4">PROVINCIAS DEL PERÚ</h6>
                    <p className="mb-0">Todas las compras por montos menores a S/150 tendrán un costo de envío de S/15. <b>Envíos gratis por compras mayores a S/150.</b></p>
                    <p className="mb-0">Tiempo de entrega de 3 a 5 días hábiles contados desde la fecha que realizaste tu compra.</p>
                    <p className="mb-0">Los envíos se hacen por Olva Courier y se te brindara el número de tracking con el que podrás hacer seguimiento de tu pedido.</p>
                    <p className="mb-0">El pedido se puede programar para que llegue a la dirección dada al momento de realizar la compra o también para recojo en la agencia de Olva Courier de la ciudad de destino.</p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Cerrar
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
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
                        <Col md={3}>
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
                            <strong>Talla: {item.sizeName}</strong>
                          </p>
                          <p>
                            <strong>color: {item.colorName}</strong>
                          </p>
                        </Col>
                        <Col md={4}>
                          {item.qty} x S/. {item.price} = S/.
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
                    <strong>S/. {cart.itemsPrice}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Costo de Envío</Col>
                  <Col><strong>S/. {cart.shippingPrice}</strong></Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col><strong>S/. {cart.totalPrice}</strong></Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Método de Pago</Col>
                  <Col><strong>{cart.paymentMethod || JSON.parse(localStorage.paymentMethod)}</strong></Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col><strong><i>*Recibirás un correo con los detalles del pedido. Recuerda mirar en la carpeta de spam si no te llega pronto.</i></strong></Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {error && <Message variant="danger">{error}</Message>}
              </ListGroup.Item>
              <ListGroup.Item>
                {
                  cart.paymentMethod === 'IziPay' || JSON.parse(localStorage.paymentMethod) === 'IziPay' ? (
                    <IziPay
                      amount={cart.totalPrice}
                      email={cart.shippingAddress.email}
                      onSuccess={onSuccessHandler}
                    />
                  ) :
                    (
                      <Button
                        type="button"
                        className="btn-block"
                        disabled={cart.cartItems === 0}
                        onClick={placeOrderHandler}
                      >
                        Hacer Pedido
                      </Button>
                    )
                }
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PlaceOrderScreen;
