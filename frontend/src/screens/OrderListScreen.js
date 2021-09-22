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
  const [status, setStatus] = useState("");
  const [bill, setBill] = useState("");
  const [name, setName] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [finishedLoading, setFinishedLoading] = useState(false)

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;



  const handleStatus = (val) => {
    setStatus(val);
    handleFilters();
  }

  const handleBill = (val) => {
    setBill(val);
    handleFilters();
  }

  const handleName = (val) => {
    setName(val);
    handleFilters();
  }

  const handleDateFrom = (val) => {
    setDateFrom(val);
    handleFilters();
    console.log(val);
  }

  const handleDateTo = (val) => {
    setDateTo(val);
    handleFilters();
    console.log(val);
  }

  const handleFilters = () => {
    let newOrders = [...orders];
    switch (document.getElementsByTagName("select")[0].value) {
      case 'Todos':
        newOrders = [...newOrders];
        break;
      case 'No Pagados':
        newOrders = newOrders.filter(x => !x.isPriced);
        break;
      case 'Pagados':
        newOrders = newOrders.filter(x => x.isPriced);
        break;
      case 'No Enviados':
        newOrders = newOrders.filter(x => !x.isDelivered);
        break;
      case 'Enviados':
        newOrders = newOrders.filter(x => x.isDelivered);
        break;
    }

    switch (document.getElementsByTagName("select")[1].value) {
      case 'Todos':
        newOrders = [...newOrders];
        break;
      case 'Sin Factura':
        newOrders = newOrders.filter(x => !x.shippingAddress.bill);
        break;
      case 'Con Factura':
        newOrders = newOrders.filter(x => x.shippingAddress.bill);
        break;
    }

    if (document.getElementsByTagName("input")[0].value) {
      newOrders = newOrders.filter(x => x.shippingAddress.name.indexOf(name) !== -1);
    }

    if (document.getElementsByTagName("input")[1].value) {
      if (document.getElementsByTagName("input")[2].value) {
        newOrders = newOrders.filter(x => +new Date(new Date(document.getElementsByTagName("input")[1].value).setHours(new Date(document.getElementsByTagName("input")[1].value).getHours() + 5)) <= +new Date(new Date(x.createdAt).setHours(0, 0, 0, 0)) &&
          +new Date(new Date(document.getElementsByTagName("input")[2].value).setHours(new Date(document.getElementsByTagName("input")[2].value).getHours() + 5)) >= +new Date(new Date(x.createdAt).setHours(0, 0, 0, 0)))
      } else {
        newOrders = newOrders.filter(x => +new Date(new Date(document.getElementsByTagName("input")[1].value).setHours(new Date(document.getElementsByTagName("input")[1].value).getHours() + 5)) <= +new Date(new Date(x.createdAt).setHours(0, 0, 0, 0)));
      }
    } else if (document.getElementsByTagName("input")[2].value) {
      newOrders = newOrders.filter(x => +new Date(new Date(document.getElementsByTagName("input")[2].value).setHours(new Date(document.getElementsByTagName("input")[2].value).getHours() + 5)) >= +new Date(new Date(x.createdAt).setHours(0, 0, 0, 0)));
    }

    setListedOrders([...newOrders]);
  }

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      if (!finishedLoading) {
        dispatch(listOrders());
      }
    } else {
      history.push("/login");
    }
    if (!finishedLoading && !loading && orders != undefined && orders.length > 0) {
      setListedOrders(orders);
      setFinishedLoading(true);
    }
  }, [dispatch, history, userInfo, loading, finishedLoading, orders]);

  return (
    <Container>
      <Meta />
      <h1>Pedidos</h1>
      <Row>
        <Col md={2}>
          <FormControl
            as="select"
            onChange={(e) => handleStatus(e.target.value)}
            label="Estado"
            value={status}
          >
            <option key={0} value={'Todos'}>Todos</option>
            <option key={1} value={'No Pagados'}>No Pagados</option>
            <option key={2} value={'Pagados'}>Pagados</option>
            <option key={3} value={'No Enviados'}>No Enviados</option>
            <option key={4} value={'Enviados'}>Enviados</option>
          </FormControl>
        </Col>
        <Col md={2}>
          <FormControl
            as="select"
            onChange={(e) => handleBill(e.target.value)}
            label="Estado"
            value={bill}
          >
            <option key={0} value={'Todos'}>Todos</option>
            <option key={1} value={'Con Factura'}>Con Factura</option>
            <option key={2} value={'Sin Factura'}>Sin Factura</option>
          </FormControl>
        </Col>
        <Col md={2}>
          <FormControl
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => handleName(e.target.value)}
          ></FormControl>
        </Col>
        <Col md={2}>
          <FormControl
            type="date"
            placeholder="Fecha Desde"
            value={dateFrom}
            onChange={(e) => handleDateFrom(e.target.value)}
          ></FormControl>
        </Col>
        <Col md={2}>
          <FormControl
            type="date"
            placeholder="Fecha Hasta"
            value={dateTo}
            onChange={(e) => handleDateTo(e.target.value)}
          ></FormControl>
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
            {listedOrders && listedOrders.length > 0 ? listedOrders.sort((a, b) => b.billNumber - a.billNumber).map((order) => (
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
            )) :
              orders.length > 0 && listedOrders.sort((a, b) => b.billNumber - a.billNumber).map((order) => (
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
              ))

            }
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default OrderListScreen;
