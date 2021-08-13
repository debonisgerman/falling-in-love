import React, { useState } from "react";
import { Row, Col, Container, ListGroup, Form, Button } from "react-bootstrap";
import Meta from "../components/Meta";

const FindUsScreen = ({ match }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [commentary, setCommentary] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Meta />

      <Row>
        <Col md={3}>
          <h1 className="mb-3 secondary-blue bold text-center">¿Dónde encontrarnos?</h1>
          <ListGroup variant="flush">
            <ListGroup.Item className="no-border  secondary-blue">
              <h5>
                <a href="tel:913059930" target="_blank" rel="noreferrer">
                  <i className="fas fa-phone pr-2"></i>
                  913059930
                </a>
              </h5>
            </ListGroup.Item>
            <ListGroup.Item className="no-border secondary-blue">
              <h5>
                <a
                  href="https://wa.me/message/BC3M5NM7LNWAE1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-whatsapp pr-2"></i>
                  913059930
                </a>
              </h5>
            </ListGroup.Item>
            <ListGroup.Item className="no-border secondary-blue">
              <h5>
                <a
                  href="mailto:fallinginloveperu@outlook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-envelope pr-2"></i>
                  fallinginloveperu@outlook.com
                </a>
              </h5>
            </ListGroup.Item>
            <ListGroup.Item className="no-border secondary-blue">
              <h5>
                <a
                  href="mailto:fallinginloveperu@outlook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-clock pr-2"></i>
                  Lunes a Viernes 9 a 18hs.
                </a>
              </h5>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <h1 className="mb-3 secondary-blue bold text-center">Déjanos tu consulta</h1>
          <ListGroup variant="flush">
            <ListGroup.Item>
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
                    type="text"
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

                <Form.Group controlId="phone">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control
                    type="text"
                    pattern="[0-9]*"
                    placeholder="Teléfono"
                    value={phone}
                    required
                    onChange={(e) => setPhone(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="phone">
                  <Form.Label>Comentario</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Comentario"
                    value={commentary}
                    required
                    onChange={(e) => setCommentary(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Button className="btn-block" type="submit" variant="primary">
                  Enviar
                </Button>
              </Form>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container >
  );
};

export default FindUsScreen;
