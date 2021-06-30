import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Row, Col, Card, Container } from "react-bootstrap";
import BannerCarousel from "../components/BannerCarousel";
import ProductCarousel from "../components/ProductCarousel";

const HomeScreen = () => {
  return (
    <>
      <BannerCarousel />
      <Container>
        <h2 className="mt-5 mb-3 secondary-blue bold text-center">Lencería Fina</h2>
        <Row>
          <Col md={3}>
            <LinkContainer
              className="CardLinkContainer"
              to="/shop"
            >
              <Card className="my-3 p-3 rounded w100p mh-400">
                <Card.Title>
                  <h4 className="dark-blue bold text-center">Categoría 1</h4>
                </Card.Title>
                <Card.Img
                  className="mh-210 of-ct"
                  src="/images/agata.jpg"
                  variant="top"
                  fluid="true"
                />

                <Card.Body>
                  <Card.Text as="p" className="dark-blue">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </Card.Text>
                </Card.Body>
              </Card>
            </LinkContainer>
          </Col>
          <Col md={3}>
            <LinkContainer
              className="CardLinkContainer"
              to="/shop"
            >
              <Card className="my-3 p-3 rounded w100p mh-400">
                <Card.Title>
                  <h4 className="dark-blue bold text-center">Categoría 2</h4>
                </Card.Title>
                <Card.Img
                  className="mh-210 of-ct"
                  src="/images/agata.jpg"
                  variant="top"
                  fluid="true"
                />

                <Card.Body>
                  <Card.Text as="p" className="dark-blue">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </Card.Text>
                </Card.Body>
              </Card>
            </LinkContainer>
          </Col>
          <Col md={3}>
            <LinkContainer
              className="CardLinkContainer"
              to="/shop"
            >
              <Card className="my-3 p-3 rounded w100p mh-400">
                <Card.Title>
                  <h4 className="dark-blue bold text-center">Categoría 3</h4>
                </Card.Title>
                <Card.Img
                  className="mh-210 of-ct"
                  src="/images/agata.jpg"
                  variant="top"
                  fluid="true"
                />

                <Card.Body>
                  <Card.Text as="p" className="dark-blue">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </Card.Text>
                </Card.Body>
              </Card>
            </LinkContainer>
          </Col>
          <Col md={3}>
            <LinkContainer
              className="CardLinkContainer"
              to="/shop"
            >
              <Card className="my-3 p-3 rounded w100p mh-400">
                <Card.Title>
                  <h4 className="dark-blue bold text-center">Categoría 4</h4>
                </Card.Title>
                <Card.Img
                  className="mh-210 of-ct"
                  src="/images/agata.jpg"
                  variant="top"
                  fluid="true"
                />

                <Card.Body>
                  <Card.Text as="p" className="dark-blue">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </Card.Text>
                </Card.Body>
              </Card>
            </LinkContainer>
          </Col>
        </Row>
        <ProductCarousel />
      </Container>
    </>
  );
};

export default HomeScreen;
