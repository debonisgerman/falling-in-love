import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";

const AboutUsScreen = () => {
  return (
    <Container>
      <h1 className="secondary-blue bold text-center mt-5 mb-3 text-center">
        Falling In Love
      </h1>
      <Row>
        <h4>Lorem Ipsum</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
      </Row>
      <Row>
        <h4>¿Por Qué elegirnos?</h4>
      </Row>
      <Row>
        <ul>
          <li>
            Lorem Ipsum Lorem Ipsum
          </li>
          <li>Lorem Ipsum Lorem Ipsum</li>
          <li>Lorem Ipsum Lorem Ipsum</li>
          <li>Lorem Ipsum Lorem Ipsum</li>
          <li>Lorem Ipsum Lorem Ipsum</li>
        </ul>
      </Row>
      <h1 className="secondary-blue bold text-center text-center mt-5">
        Conózcanos
      </h1>
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <Card className="my-3 p-3 rounded w100p">
            <Card.Title>
              <h4 className="text-center">Andrea Cueva</h4>
            </Card.Title>
            <Card.Img
              src="/images/mujer.png"
              variant="top"
              fluid="true"
              style={{ width: "50%", margin: "0 auto" }}
            />
            <Card.Body>
              <Card.Text as="p" className="text-center">
                Contáctenos
              </Card.Text>
              <Card.Text>
                <Row className="mt-2">
                  <Col className="text-center">
                    <a
                      href="https://wa.me/message/BC3M5NM7LNWAE1"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "green" }}
                    >
                      <i
                        className="fab fa-whatsapp pt-2"
                        style={{ fontSize: "35px" }}
                      ></i>
                    </a>
                  </Col>
                  <Col className="text-center">
                    <a
                      href="mailto:fallinginloveperu@outlook.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fas fa-envelope pt-2"
                        style={{ fontSize: "35px" }}
                      ></i>
                    </a>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
};

export default AboutUsScreen;
