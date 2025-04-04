import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Row, Col, Card, Container } from "react-bootstrap";
import BannerCarousel from "../components/BannerCarousel";
import ProductCarousel from "../components/ProductCarousel";
import ProductCarouselMobile from "../components/ProductCarouselMobile";
import useWindowDimensions from '../components/useWindowDimensions';
import Loader from "../components/Loader";
import Message from "../components/Message";
import Meta from "../components/Meta";
import { listCategories } from "../actions/categoryActions";

const HomeScreen = () => {

  const dispatch = useDispatch();
  const { width } = useWindowDimensions();

  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, categories } = categoryList;
  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);


  return (
    <>
      <Meta />
      <BannerCarousel />
      <div className="relative">

        <Container>
          <h2 className="mt-5 mb-3 secondary-blue bold text-center border-title-bottom">ÚNICA Y LIBRE</h2>
          <h5 className="text-center fs-1"><i>Conviértete en una chica Falling in Love, ten la libertad de usar lo que te haga sentir única</i></h5>
          <h5 className="mb-5 text-center  fs-1"><i>Nuestras prendas te ayudarán a resaltar tu sensualidad sin dejar de lado tu comodidad.</i></h5>
        </Container>
      </div>
      <Row className="bg-light m-0">
        <h2 className="mt-5 mb-3 secondary-blue bold text-center border-title-bottom">ENCUENTRA TU FAVORITO</h2>
      </Row>

      <Row className="bg-light m-0">
        <Container>
          <Row>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : (
              categories && categories.filter(c => c.showInHome).slice(0, 4).map((category) => (
                <Col lg={3} md={6} sm={6} xs={6} className="flex m-p-0">

                  <Card className="my-3 p-3 rounded w100p mh-400 CardLinkContainer">
                    <Card.Img
                      className="mh-210 of-ct m-w-70-m0a"
                      src={category.image}
                      variant="top"
                      fluid="true"
                    />
                    <Card.Title>
                      <h4 className="bold text-center underline">
                        <LinkContainer
                          to={`/shop?category=${category.name}`}
                          style={{ cursor: 'pointer' }}
                        ><i>{category.name}</i>
                        </LinkContainer>
                      </h4>
                    </Card.Title>
                    <Card.Body>
                      <Card.Text as="p" className="">
                        <i>{category.description}</i>
                      </Card.Text>
                      <Card.Text as="div" className="text-center">
                        <LinkContainer
                          to={`/shop?category=${category.name}`}
                        >
                          <div className="btn btn-primary rounded"><i className="text-white">Comprar</i></div>
                        </LinkContainer>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )}
          </Row>
        </Container>
      </Row>
      <Container>
        {width > 500 ? (
          <ProductCarousel />
        ) : (
          <ProductCarouselMobile />
        )}
      </Container>
    </>
  );
};

export default HomeScreen;
