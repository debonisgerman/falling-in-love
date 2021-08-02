import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Row, Col, Card, Container } from "react-bootstrap";
import BannerCarousel from "../components/BannerCarousel";
import ProductCarousel from "../components/ProductCarousel";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Meta from "../components/Meta";
import { listCategories } from "../actions/categoryActions";

const HomeScreen = () => {

  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, categories } = categoryList;
  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);


  return (
    <>
      <Meta />
      <BannerCarousel />
      <Container>
        <h2 className="mt-5 mb-3 secondary-blue bold text-center">Lencería Fina</h2>
        <Row>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            categories && categories.filter(c => c.showInHome).slice(0, 4).map((category) => (
              < Col md={3} className="flex">
                <LinkContainer
                  className="CardLinkContainer"
                  to="/shop"
                >
                  <Card className="my-3 p-3 rounded w100p mh-400">
                    <Card.Title>
                      <h4 className="dark-blue bold text-center">{category.name}</h4>
                    </Card.Title>
                    <Card.Img
                      className="mh-210 of-ct"
                      src={category.image}
                      variant="top"
                      fluid="true"
                    />

                    <Card.Body>
                      <Card.Text as="p" className="dark-blue">
                        {category.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </LinkContainer>
              </Col>
            ))
          )}
        </Row>
        <ProductCarousel />
      </Container>
    </>
  );
};

export default HomeScreen;
