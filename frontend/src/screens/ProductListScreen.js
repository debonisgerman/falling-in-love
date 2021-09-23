import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col, Image, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import Meta from "../components/Meta";
import {
  listProducts,
  deleteProduct,
  createProduct,
} from "../actions/productActions";
import { PRODUCT_CREATE_RESET } from "../constants/productConstants";

const ProductListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1;
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });
    if (!userInfo.isAdmin) {
      history.push("/login");
    }

    if (successCreate) {
      history.push(`/admin/product/${createdProduct._id}/edit`);
    } else {
      dispatch(listProducts("", pageNumber));
    }
    if (successDelete) {
      if (products && products.length < 2 && pageNumber > 1) {
        if (pageNumber !== "2") {
          history.push(`/admin/productlist/${pageNumber - 1}`)
        } else {
          history.push(`/admin/productlist/`)
        }
      }
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdProduct,
    pageNumber,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("¿Estás Seguro?")) {
      dispatch(deleteProduct(id));
    }
  };

  const createProductHandler = () => {
    dispatch(createProduct());
  };

  return (
    <Container>
      <Meta />
      <Row className="alignItems-center">
        <Col>
          <h1>Productos</h1>
        </Col>
        <Col className="text-right">
          <Button className="my-3" onClick={createProductHandler}>
            <i className="fas fa-plus" /> Crear Producto
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant="danger">{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th style={{ width: "10%" }}>Imagen</th>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Material</th>
                <th>Categoría</th>
                <th>Sección</th>
                <th>Stock</th>
                <th>Publicado</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td style={{ width: "10%" }}>
                    <Image src={
                      product.variants &&
                        product.variants.length > 0 &&
                        product.variants[0].images &&
                        product.variants[0].images.length > 0 ?
                        product.variants[0].images[0] :
                        '/images/logo.png'
                    } alt={product.name} fluid="true" />
                  </td>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.price ? `S./ ${product.price}` : ''}</td>
                  <td>{product.material ? product.material.reduce((accumulator, currentValue) => accumulator = accumulator + ", " + currentValue.name, "").slice(2) : ''}</td>
                  <td>{product.category ? product.category.name : ''}</td>
                  <td>{product.section ? product.section.reduce((accumulator, currentValue) => accumulator = accumulator + ", " + currentValue.name, "").slice(2) : ''}</td>
                  <td>{product.variants ?
                    product.variants.reduce((accumulator, currentValue) => accumulator = accumulator + currentValue.sizes.reduce((ac, cv) => ac + cv.stock, 0), 0)
                    : 0
                  }</td>
                  <td>{product.published ? 'Si' : 'No'}</td>
                  <td>
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button variant="light" className="btn-sm">
                        <i className="fa fa-edit" />
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(product._id)}
                    >
                      <i className="fa fa-trash" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate pages={pages} page={page} isAdmin={true} />
        </>
      )}
    </Container>
  );
};

export default ProductListScreen;
