import React, { useState } from "react";
import { Form, Button, Col, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import Meta from "../components/Meta";
import { savePaymentMethod } from "../actions/cartActions";

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress)
  {
    history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("IziPay");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  return (
    <FormContainer>
      <Meta />
      <CheckoutSteps step1 step2 step3 />
      <h1>Elegir metodo de pago:</h1>
      <Form className="payment-selector" onSubmit={submitHandler}>
        <Form.Group>
          <Col>
            <Form.Check
              type="radio"
              label="Pago con tarjeta de Crédito / Débito"
              id="IziPay"
              name="paymentMethod"
              value="IziPay"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
            </Form.Check>
            <Col
              xs={4}
              sm={4}
              md={4}
              lg={4}
              xl={2}
            >
              <Image
                src="/images/izipay.png"
                alt="logo"
                fluid="true"
                style={{marginTop: 5, marginBottom: 10}}
              />
            </Col>
            <Form.Check
              type="radio"
              label="Transferencia/Yape/Plin"
              id="Transfer"
              name="paymentMethod"
              value="TransferenciaYapePlin"
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>

        <Button type="submit" variant="primary">
          Continuar
        </Button>
      </Form>
    </FormContainer >
  );
};

export default PaymentScreen;
