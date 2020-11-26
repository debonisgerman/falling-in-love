import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import BannerCarousel from "../components/BannerCarousel";
import ProductCarousel from "../components/ProductCarousel";

const HomeScreen = () => {
  return (
    <>
      <Row className="justify-content-center">
        <h1>GIK DIGITAL</h1>
      </Row>
      <BannerCarousel />
      <h2 className="mt-5 mb-3">What do we do?</h2>
      <Row>
        <Col md={4}>
          <h4 className="text-center">Lorem Ipsum</h4>
          <Image src="/images/airpods.jpg" alt="nombre" fluid />
          <p>
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          </p>
        </Col>
        <Col md={4}>
          <h4 className="text-center">Lorem Ipsum</h4>
          <Image src="/images/alexa.jpg" alt="nombre" fluid />
          <p>
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          </p>
        </Col>
        <Col md={4}>
          <h4 className="text-center">Lorem Ipsum</h4>
          <Image src="/images/phone.jpg" alt="nombre" fluid />
          <p>
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          </p>
        </Col>
      </Row>
      <h2 className="mt-5 mb-3">Top Products</h2>
      <ProductCarousel />
      <h2 className="mt-5 mb-3">Trust us</h2>
      <div className="marquee">
        <p>
          <Image src="/images/logo.png" alt="nombre" fluid className="mx-3" />
          <Image src="/images/logo.png" alt="nombre" fluid className="mx-3" />
          <Image src="/images/logo.png" alt="nombre" fluid className="mx-3" />
          <Image src="/images/logo.png" alt="nombre" fluid className="mx-3" />
          <Image src="/images/logo.png" alt="nombre" fluid className="mx-3" />
          <Image src="/images/logo.png" alt="nombre" fluid className="mx-3" />
          <Image src="/images/logo.png" alt="nombre" fluid className="mx-3" />
          <Image src="/images/logo.png" alt="nombre" fluid className="mx-3" />
        </p>
      </div>
    </>
  );
};

export default HomeScreen;
