import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col, Image, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {
  listBanners,
  deleteBanner,
  createBanner,
} from "../actions/bannerActions";
import { BANNER_CREATE_RESET } from "../constants/bannerConstants";

const BannerListScreen = ({ history, match }) => {
  const dispatch = useDispatch();

  const bannerList = useSelector((state) => state.bannerList);
  const { loading, error, banners } = bannerList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const bannerDelete = useSelector((state) => state.bannerDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = bannerDelete;

  const bannerCreate = useSelector((state) => state.bannerCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    banner: createdBanner,
  } = bannerCreate;

  useEffect(() => {
    dispatch({ type: BANNER_CREATE_RESET });
    if (!userInfo.isAdmin) {
      history.push("/login");
    }

    if (successCreate) {
      history.push(`/admin/banner/${createdBanner._id}/edit`);
    } else {
      dispatch(listBanners());
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdBanner,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("¿Estás Seguro?")) {
      dispatch(deleteBanner(id));
    }
  };

  const createBannerHandler = () => {
    dispatch(createBanner());
  };

  return (
    <Container>
      <Row className="alignItems-center">
        <Col>
          <h1>Banners</h1>
        </Col>
        <Col className="text-right">
          <Button className="my-3" onClick={createBannerHandler}>
            <i className="fas fa-plus" /> Crear Banners
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
                <th>Imagen Desktop</th>
                <th>Imagen Tablet</th>
                <th>Imagen Celular</th>
                <th>Mostrar</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {banners && banners.map((banner) => (
                <tr key={banner._id}>
                  <td style={{ width: "15%" }}>
                    <Image
                      src={banner.imageDesktop}
                      alt={banner._id}
                      fluid="true"
                    />
                  </td>
                  <td style={{ width: "15%" }}>
                    <Image
                      src={banner.imageTablet}
                      alt={banner._id}
                      fluid="true"
                    />
                  </td>
                  <td style={{ width: "15%" }}>
                    <Image
                      src={banner.imageMobile}
                      alt={banner._id}
                      fluid="true"
                    />
                  </td>
                  <td>{banner.show ? "Si" : "No"}</td>
                  <td>
                    <LinkContainer to={`/admin/banner/${banner._id}/edit`}>
                      <Button variant="light" className="btn-sm">
                        <i className="fa fa-edit" />
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(banner._id)}
                    >
                      <i className="fa fa-trash" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </Container>
  );
};

export default BannerListScreen;
