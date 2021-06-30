import React, { useState, useEffect } from "react";
import { Row, Col, Container, ListGroup, Form, Button } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const FindUsScreen = ({ match }) => {
  const [map, setMap] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const filterMap = (filter) => {
    if (filter === "paruro") {
      map.setView([-12.054208809262152, -77.0255821313492], 17);
      document.getElementsByClassName("leaflet-marker-icon")[0].click();
    }
    if (filter === "lampa") {
      map.setView([-12.053952, -77.03429], 17);
      document.getElementsByClassName("leaflet-marker-icon")[1].click();
    }
  };

  useEffect(() => {
    if (match.params.map) {
      if (map) {
        filterMap(match.params.map);
      }
    }
  });

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <h1 className="mt-5 mb-3 text-center">¿Dónde encontrarnos?</h1>
      <Row>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item
              onClick={() => filterMap("paruro")}
              className="no-border pb-0"
              style={{ cursor: "pointer" }}
            >
              <i className="fas fa-map-marker-alt pr-2"></i>
              Lorem Ipsum
            </ListGroup.Item>
            <ListGroup.Item className="pt-0">
              <Row className="mt-2">
                <Col>
                  <div>
                    <a href="tel:11111111" target="_blank" rel="noreferrer">
                      <i className="fas fa-phone pr-2"></i>
                      11111111
                    </a>
                  </div>
                </Col>
                <Col>
                  <div>
                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-whatsapp pr-2"></i>
                      11111111
                    </a>
                  </div>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item
              onClick={() => filterMap("lampa")}
              className="no-border pb-0"
              style={{ cursor: "pointer" }}
            >
              <i className="fas fa-map-marker-alt pr-2"></i>
              Lorem Ipsum
            </ListGroup.Item>
            <ListGroup.Item className="pt-0">
              <Row className="mt-2">
                <Col>
                  <div>
                    <a href="tel:11111111" target="_blank" rel="noreferrer">
                      <i className="fas fa-phone pr-2"></i>
                      11111111
                    </a>
                  </div>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <div>
                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-whatsapp pr-2"></i>
                      11111111
                    </a>
                  </div>
                </Col>
                <Col>
                  <div>
                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-whatsapp pr-2"></i>
                      11111111
                    </a>
                  </div>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>Déjanos tu consulta</h4>
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
                    placeholder="Teléfono"
                    value={phone}
                    required
                    onChange={(e) => setPhone(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Button className="btn-block" type="submit" variant="primary">
                  Enviar
                </Button>
              </Form>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9}>
          <MapContainer
            center={[-12.054208809262152, -77.0255821313492]}
            zoom={15}
            scrollWheelZoom={false}
            style={{ height: "37rem" }}
            whenCreated={setMap}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              data-id="paruro"
              position={[-12.054208809262152, -77.0255821313492]}
            >
              <Popup>
                <div style={{ width: "13rem" }}>
                  <Row>
                    <h6 style={{ width: "100%" }} className="text-center">
                      Lorem Ipsum
                    </h6>
                  </Row>
                  <Row className="my-2">
                    <Col className="text-center">
                      <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "green" }}
                      >
                        <i
                          className="fas fa-map-marker-alt py-2"
                          style={{ fontSize: "25px" }}
                        ></i>
                        <br />
                        Google Maps
                      </a>
                    </Col>
                    <Col className="text-center">
                      <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i
                          className="fab fa-waze py-2"
                          style={{ fontSize: "25px" }}
                        ></i>
                        <br />
                        Waze
                      </a>
                    </Col>
                  </Row>
                </div>
              </Popup>
            </Marker>
            <Marker data-id="lampa" position={[-12.053952, -77.03429]}>
              <Popup>
                <div style={{ width: "13rem" }}>
                  <Row>
                    <h6 style={{ width: "100%" }} className="text-center">
                      Lorem Ipsum
                    </h6>
                  </Row>
                  <Row className="my-2">
                    <Col className="text-center">
                      <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "green" }}
                      >
                        <i
                          className="fas fa-map-marker-alt py-2"
                          style={{ fontSize: "25px" }}
                        ></i>
                        <br />
                        Google Maps
                      </a>
                    </Col>
                    <Col className="text-center">
                      <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i
                          className="fab fa-waze py-2"
                          style={{ fontSize: "25px" }}
                        ></i>
                        <br />
                        Waze
                      </a>
                    </Col>
                  </Row>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default FindUsScreen;
