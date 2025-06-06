import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import queryString from "query-string";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import Meta from "../components/Meta";
import { listShopProducts, listFilters } from "../actions/productActions";
import Filter from "../components/Filter";

const ShopScreen = ({ match, location }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;
  const parsed = {
    category: "",
    material: "",
    section: "",
    ...queryString.parse(location.search),
  };
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const productFilter = useSelector((state) => state.productFilter);
  const {
    loading: loadingFilters,
    error: errorFilters,
    filters,
  } = productFilter;

  useEffect(() => {
    dispatch(listShopProducts(keyword, pageNumber));
    dispatch(listFilters(keyword));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      <Container>
        <h1>Conoce nuestra colección</h1>
      </Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row className="px-3 w-100 mobile-px2-ml-0 ml-w78">
            <Col lg={3} md={4} xl={3} className="pt-2-4">
              <Filter
                loadingFilters={loadingFilters}
                errorFilters={errorFilters}
                parsed={parsed}
                keyword={keyword}
                filters={filters}
              />
            </Col>
            <Col lg={9} md={8} xl={9}>
              <Row>
                {products.map((product) => (
                  <Col
                    key={product._id}
                    sm={12}
                    md={6}
                    lg={6}
                    xl={4}
                    className="disp-flex mobile-center"
                  >
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
              <Paginate
                pages={pages}
                page={page}
                keyword={keyword ? keyword : ""}
                queryParams={location.search}
              />
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ShopScreen;
