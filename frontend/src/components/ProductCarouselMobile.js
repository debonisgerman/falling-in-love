import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import { listTopProducts } from "../actions/productActions";

const ProductCarousel = () => {
  const dispatch = useDispatch();
  let pages = [];
  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  const getPages = () => {
    if (!products || products.length === 0)
    {
      return null;
    } else
    {
      const pagesCount = Math.ceil(products.length / 2);
      if (document.getElementById("destTitle") && products.length > 0)
      {
        document.getElementById("destTitle").innerHTML = "LOS PREFERIDOS";
      }
      pages = [];
      for (let i = 0; i < pagesCount; i++)
      {
        pages.push(i + 1);
      }
      return pages.map((page, index) => (
        <Carousel.Item key={page}>
          <Row className="w-100 text-center justify-content-center">{getCarouselItem(page, products)}</Row>
        </Carousel.Item>
      ))
    }
  }

  const handleLink = product => {
    window.location.href = window.location.origin + `/product/${product._id}`;
  }

  const getCarouselItem = (page, products) => {
    if (!products || products.length === 0)
    {
      // document.getElementById("destTitle") ? document.getElementById("destTitle").remove() : null;
      return null;
    } else
    {
      const rounds = page + 2;
      let items = [];
      for (let i = page; i < rounds; i++)
      {
        if (products[i - 1])
        {
          items.push(
            <Col md={5} sm={5} xs={5} key={products[i - 1]._id}>
              <Link onClick={() => handleLink(products[i - 1])}>
                <Image
                  src={
                    products[i - 1].variants &&
                      products[i - 1].variants[0] &&
                      products[i - 1].variants[0].images.length > 0 ?
                      products[i - 1].variants[0].images[0] :
                      '/images/logo.png'
                  }
                  alt={products[i - 1].name}
                  fluid="true"
                  className="m-w-70-m0a"
                />
                <Carousel.Caption className="carosuel-caption">
                  <h5 className="bold text-center underline"><i>{products[i - 1].name}</i></h5>
                  <h5><i>S/. {products[i - 1].price}</i></h5>
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
      <h2 id="destTitle" className="mt-5 mb-3 secondary-blue bold text-center border-title-bottom"></h2>
      <Carousel id="productCarousel" pause="hover" className="bg-primary" controls={false}>
        {getPages()}
      </Carousel>
    </>
  );
};

export default ProductCarousel;
