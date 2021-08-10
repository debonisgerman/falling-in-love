import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Row, Col, Card, Container, Image } from "react-bootstrap";
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
      <div className="relative">
        <div className="flower-container flower-left">
          <Image
            src='/images/flores.png'
            alt='floresIzq'
            fluid="true"
          />
        </div>
        <div className="flower-container flower-right">
          <Image
            src='/images/flores.png'
            alt='floresIzq'
            fluid="true"
          />
        </div>
        <Container>
          <h2 className="mt-5 mb-3 secondary-blue bold text-center border-title-bottom">ÚNICA Y LIBRE</h2>
          <h5 className="text-center"><i>Conviértete en una chica Falling in Love, ten la libertad de usar lo que te haga sentir única</i></h5>
          <h5 className="text-center"><i>Nuestras prendas te ayudarán a resaltar tu sensualidad sin dejar de lado tu comodidad.</i></h5>
        </Container>
      </div>
      <Row className="bg-light">
        <h2 className="mt-5 mb-3 secondary-blue bold text-center border-title-bottom">ENCUENTRA TU FAVORITO</h2>
      </Row>

      <Row className="bg-light">
        <Container>
          <Row>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : (
              categories && categories.filter(c => c.showInHome).slice(0, 4).map((category) => (
                <Col md={3} className="flex">

                  <Card className="my-3 p-3 rounded w100p mh-400 CardLinkContainer">
                    <Card.Img
                      className="mh-210 of-ct"
                      src={category.image}
                      variant="top"
                      fluid="true"
                    />
                    <Card.Title>
                      <h4 className="bold text-center underline"><i>{category.name}</i></h4>
                    </Card.Title>
                    <Card.Body>
                      <Card.Text as="p" className="">
                        <i>{category.description}</i>
                      </Card.Text>
                      <Card.Text as="div" className="text-center">
                        <LinkContainer
                          to="/shop"
                        >
                          <div className="btn btn-outline-primary rounded"><i>Comprar</i></div>
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
        <ProductCarousel />
      </Container>
    </>
  );
};

export default HomeScreen;
