import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import { listTopProducts } from "../actions/productActions";

const ProductCarousel = () => {
  const dispatch = useDispatch();
  const pages = [1, 2, 3];
  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  const getCarouselItem = (page, products) => {
    if (!products || products.length === 0) {
      return null;
    } else {
      const rounds = page + 3;
      let items = [];
      for (let i = page; i < rounds; i++) {
        if (products[i - 1]) {
          items.push(
            <Col key={products[i - 1]._id}>
              <Link to={`/product/${products[i - 1]._id}`}>
                <Image
                  src={products[i - 1].image}
                  alt={products[i - 1].name}
                  fluid="true"
                />
                <Carousel.Caption className="carosuel-caption">
                  <h5>{products[i - 1].name}</h5>
                </Carousel.Caption>
              </Link>
            </Col>
          );
        }
      }
      return items
    }
  };

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <h2 className="mt-5 mb-3 secondary-blue bold text-center">Productos Destacados</h2>
      <Carousel id="productCarousel" pause="hover" className="bg-primary" controls={false}>
        {pages.map((page, index) => (
          <Carousel.Item key={page}>
            <Row className="w-100 text-center">{getCarouselItem(page, products)}</Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default ProductCarousel;
