import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import Meta from "../components/Meta";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { saveShippingAddress } from "../actions/cartActions";
import { listDepartments } from "../actions/departmentActions";

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const departmentList = useSelector((state) => state.departmentList);
  const { loading, error, departments } = departmentList;

  const [name, setName] = useState(shippingAddress.name);
  const [email, setEmail] = useState(shippingAddress.email);
  const [address, setAddress] = useState(shippingAddress.address);
  const [department, setDepartment] = useState(shippingAddress.department);
  const [filledDepartment, setFilledDepartment] = useState(false);
  const [province, setProvince] = useState(shippingAddress.province);
  const [phone, setPhone] = useState(shippingAddress.phone);
  const [socialReason, setSocialReason] = useState(shippingAddress.socialReason);
  const [ruc, setRuc] = useState(shippingAddress.ruc);
  const [bill, setBill] = useState(shippingAddress.bill);
  const [currentProvinces, setCurrentProvinces] = useState([])

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(listDepartments());
  }, [dispatch]);

  setTimeout(() => {
    if (department && !filledDepartment) {
      handleDepartment(department);
      setFilledDepartment(true);
    }
  }, 1000);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ name, email, address, department, province, phone, socialReason, ruc, bill }));
    history.push("/payment");
  };

  const handleDepartment = (value, id) => {
    setDepartment(value);
    const selectedDepartment = departments.find(d => d.name.toString() == value);
    createProvinceSelector(selectedDepartment);
  }

  const createProvinceSelector = (department) => {
    let auxProvinces = [];
    if (department && department.provinces.length > 0) {
      department.provinces.map((p) => {
        auxProvinces.push(p.name);
      });
    }
    setCurrentProvinces(auxProvinces);
    if (province) {
      setProvince(province);
    }
  }

  return (
    <FormContainer>
      <Meta />
      <CheckoutSteps step1 step2 />
      <h1>Envío</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Nombre y Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre y Apellido"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            placeholder="Dirección"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="department">
          <Form.Label>Departamento</Form.Label>
          <Form.Control
            as="select"
            value={department}
            required
            onChange={e => {
              handleDepartment(e.target.value, e.target.selectedOptions[0].id)
            }}
          >
            <option value={''}>- Elegir</option>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : (
              departments && departments.sort((a, b) => {
                if (a.name < b.name) { return -1; }
                if (a.name > b.name) { return 1; }
                return 0;
              }).map((c) => (
                <option id={c._id} key={c._id} value={c.name}>{c.name}</option>
              ))
            )}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="department">
          <Form.Label>Provincia</Form.Label>
          <Form.Control
            as="select"
            value={province}
            required
            onChange={e => {
              setProvince(e.target.value)
            }}
          >
            <option value={''}>- Elegir</option>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : (
              currentProvinces && currentProvinces.sort((a, b) => a > b).map((c, i) => (
                <option id={i} key={i} value={c}>{c}</option>
              ))
            )}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="phone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            placeholder="Teléfono"
            pattern="[0-9]*"
            value={phone}
            required
            onChange={(e) => setPhone(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="bill">
          <Form.Check
            type="checkbox"
            label="Factura"
            checked={bill}
            onChange={(e) => {
              setBill(e.target.checked)
              if (!e.target.checked) {
                setSocialReason("");
                setRuc("");
              }
            }
            }
          ></Form.Check>
        </Form.Group>
        {
          bill && (
            <>
              <Form.Group controlId="socialReason">
                <Form.Label>Razón Social</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Razón Social"
                  value={socialReason}
                  required={bill}
                  onChange={(e) => setSocialReason(e.target.value)}
                  visible={bill}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="ruc">
                <Form.Label>RUC</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="RUC"
                  value={ruc}
                  required={bill}
                  onChange={(e) => setRuc(e.target.value)}
                  visible={bill}
                  pattern="[0-9]*"
                  maxLength={11}
                ></Form.Control>
              </Form.Group>
            </>
          )
        }
        <Button type="submit" variant="primary">
          Continuar
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
