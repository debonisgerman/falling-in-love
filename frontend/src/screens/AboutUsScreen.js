import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import Meta from "../components/Meta";

const AboutUsScreen = () => {
  return (
    <Container>
      <Meta />
      <h1 className="secondary-blue bold text-center mt-5 mb-3 text-center">
        Falling In Love
      </h1>
      <Row>
        <p>
          Falling in love, es una marca peruana que nace a partir de la necesidad de la mujer por encontrar lencería bonita y
          cómoda es por ello que estamos para brindarte estilo y sensualidad en tu día a día con piezas únicas hechas con amor.
        <br />
          Cada pieza implica compromiso, excelencia y originalidad de la marca,
          para hacer sentir a las mujeres únicas y siempre sexys.
        <br />
          Las colecciones están hechas con la más alta calidad en telas y materiales,
          para crear piezas bellas y únicas.
        </p>
      </Row>
      <Row>
        <h4>¿Por Qué elegirnos?</h4>
      </Row>
      <Row>
        <ul>
          <li>
            Ayudarás un emprendimiento peruano, encontrarás piezas únicas hechas con amor 
            que resaltará tu sensualidad en tu día a día con lencería fina y te acompañamos 
            también en verano con unos bikinis únicos.
          </li>
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
                      href="mailto:hola@fallinginlove.pe"
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
