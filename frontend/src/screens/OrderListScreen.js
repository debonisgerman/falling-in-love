import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Container, FormControl, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Meta from "../components/Meta";
import { listOrders } from "../actions/orderActions";

const OrderListScreen = ({ history }) => {
  const dispatch = useDispatch();
  const [listedOrders, setListedOrders] = useState([])

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      history.push("/login");
    }
    if (listedOrders.length == 0) {
      handleStatus('Todos');
    }
  }, [dispatch, history, userInfo]);

  const handleStatus = (val) => {
    console.log(val);
    switch (val) {
      case 'Todos':
        setListedOrders(orders);
        break;
      case 'No Pagados':
        setListedOrders(orders.filter(x => !x.isPriced));
        break;
      case 'Pagados':
        setListedOrders(orders.filter(x => x.isPriced));
        break;
      case 'No Enviados':
        setListedOrders(orders.filter(x => !x.isDelivered));
        break;
      case 'Enviados':
        setListedOrders(orders.filter(x => x.isDelivered));
        break;
    }
  }

  return (
    <Container>
      <Meta />
      <h1>Pedidos</h1>
      <Row>
        <Col md={4}>
          <FormControl
            as="select"
            onChange={(e) => handleStatus(e.target.value)}
            label="Estado"
          >
            <option key={0} value={'Todos'}>Todos</option>
            <option key={1} value={'No Pagados'}>No Pagados</option>
            <option key={2} value={'Pagados'}>Pagados</option>
            <option key={3} value={'No Enviados'}>No Enviados</option>
            <option key={4} value={'Enviados'}>Enviados</option>
          </FormControl>
        </Col>
      </Row>
      <br />

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>Nro. Factura</th>
              <th>Nombre</th>
              <th>Factura</th>
              <th>Contacto</th>
              <th>Fecha</th>
              <th>Pagado</th>
              <th>Enviado</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listedOrders.length > 0 && listedOrders.sort((a, b) => b.billNumber - a.billNumber).map((order) => (
              <tr key={order._id}>
                <td>{order.billNumber}</td>
                <td>{order.shippingAddress.name}</td>
                <td>{order.shippingAddress.bill ? 'Si' : 'No'}</td>
                <td className="flex align-items-center justify-content-around">
                  <a
                    href={`mailto:${order.shippingAddress.email}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a
                    href={`tel:${order.shippingAddress.phone}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-phone"></i>
                  </a>
                </td>
                <td>{new Date(order.createdAt).toLocaleString()}</td>
                <td>
                  {order.isPriced ? (
                    new Date(order.pricedAt).toLocaleString()
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }} />
                  )}
                </td>
                <td>
                  {order.isDelivered ? (
                    new Date(order.deliveredAt).toLocaleString()
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }} />
                  )}
                </td>
                <td>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button variant="light" className="btn-sm">
                      Detalles
                    </Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default OrderListScreen;
