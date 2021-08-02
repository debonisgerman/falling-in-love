import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Meta from "../components/Meta";
import { listOrders } from "../actions/orderActions";

const OrderListScreen = ({ history }) => {
  const dispatch = useDispatch();

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
  }, [dispatch, history, userInfo]);

  return (
    <Container>
      <Meta />
      <h1>Pedidos</h1>
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
            {orders.map((order) => (
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
