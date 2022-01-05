import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  Container,
} from "react-bootstrap";
import Message from "../components/Message";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { ORDER_CREATE_RESET } from "../constants/orderConstants";
import { isMobile } from 'react-device-detect';

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;

  let qty = 0;
  let size = "";
  let color = "";

  const search = location.search ? location.search.split("&") : null;
  if (search)
  {
    qty = search.find(x => x.indexOf("qty") !== -1).split("=")[1];
    size = search.find(x => x.indexOf("size") !== -1).split("=")[1];
    color = search.find(x => x.indexOf("color") !== -1).split("=")[1];
  }
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId)
    {
      dispatch(addToCart(productId, qty, size, color));
    }
  }, [dispatch, productId, qty, size, color]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    console.log('order_RESET')
    dispatch({ type: ORDER_CREATE_RESET });
    history.push("/shipping");
  };

  const trunc = (x, posiciones = 0) => {
    if ((""+x).indexOf('.') === -1) return Number(x); 
    var s = x.toString()
    var l = s.length
    var decimalLength = s.indexOf('.') + 1
    var numStr = s.substr(0, decimalLength + posiciones)
    return Number(numStr)
  }

  return (
    <Container>
      <Meta />
      <Row>
        <Col md={8}>
          <Link className="btn btn-light my-3 rounded" to="/shop">
            <i className="fas fa-store-alt pr-2" />Seguir Comprando
          </Link>
          <h1><i>Carrito de compras</i></h1>
          {cartItems.length === 0 ? (
            <Message>
              El carrito está vacío <Link to="/shop">Volver</Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        fluid="true"
                        rounded
                      />
                    </Col>
                    <Col md={3}>
                      <Link
                        style={{ fontSize: '1.1rem' }}
                        to={`/product/${item.product}`}
                      >
                        {item.name}
                      </Link>
                      <div
                        style={{ fontSize: '1.1rem' }}
                      >
                        S/. {item.price}
                      </div>
                    </Col>
                    <Col md={1}>
                      <div
                        style={{ fontSize: '1.1rem' }}
                      >
                        {item.sizeName}
                      </div>
                    </Col>
                    <Col md={2}>
                      <div
                        style={{ fontSize: '1.1rem' }}
                      >
                        {item.colorName}
                      </div>
                    </Col>
                    <Col md={2}>
                      <div
                        style={{ fontSize: '1.1rem' }}
                      >
                        {item.qty}{item.qty > 1 ? ' Unidades' : ' Unidad'}
                      </div>
                    </Col>
                    <Col md={2}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i className="fas fa-trash" />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
          <br />
          {!isMobile &&
            <ProductCarousel />
          }
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>
                  Subtotal (S/. {trunc(cartItems.reduce((acc, item) => acc + (item.qty * item.price), 0), 2)})
                </h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Pedir
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        {isMobile &&
          <ProductCarousel />
        }
      </Row>
    </Container>
  );
};

export default CartScreen;
