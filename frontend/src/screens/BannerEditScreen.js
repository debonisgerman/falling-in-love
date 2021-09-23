import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Meta from "../components/Meta";
import FormContainer from "../components/FormContainer";
import { listBannersDetails, updateBanner } from "../actions/bannerActions";
import {
  BANNER_UPDATE_RESET,
  BANNER_DETAILS_RESET,
} from "../constants/bannerConstants";

const BannerEditScreen = ({ match, history }) => {
  const bannerId = match.params.id;

  const [imageDesktop, setImageDesktop] = useState("");
  const [imageTablet, setImageTablet] = useState("");
  const [imageMobile, setImageMobile] = useState("");
  const [show, setShow] = useState(false);
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const bannerDetails = useSelector((state) => state.bannerDetails);
  const { loading, error, banner } = bannerDetails;

  const bannerUpdate = useSelector((state) => state.bannerUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = bannerUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: BANNER_UPDATE_RESET });
      dispatch({ type: BANNER_DETAILS_RESET });
      history.push("/admin/bannerlist");
    } else {
      if (!banner || !banner.imageDesktop || banner._id !== bannerId) {
        dispatch(listBannersDetails(bannerId));
      } else {
        setImageDesktop(banner.imageDesktop);
        setImageTablet(banner.imageTablet);
        setImageMobile(banner.imageMobile);
        setShow(banner.show);
      }
    }
  }, [banner, dispatch, bannerId, history, successUpdate]);

  const uploadFileHandler = async (e, imageType) => {
    console.log(imageType);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append(imageType, file);
    setUploading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const url =
        imageType === "imageDesktop"
          ? "bannerDesktop"
          : imageType === "imageTablet"
            ? "bannerTablet"
            : "bannerMobile";
      const { data } = await axios.post(`/api/upload/${url}`, formData, config);
      console.log(data);
      if (imageType === "imageDesktop") {
        setImageDesktop(data);
      }
      if (imageType === "imageTablet") {
        setImageTablet(data);
      }
      if (imageType === "imageMobile") {
        setImageMobile(data);
      }

      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateBanner({
        _id: bannerId,
        imageDesktop,
        imageTablet,
        imageMobile,
        show,
      })
    );
  };

  return (
    <Container>
      <Meta />
      <Link to="/admin/bannerlist" className="btn btn-light my-3">
        Volver
      </Link>
      <FormContainer>
        <h1>Editar Banner</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="imageDesktop">
              <Form.Label>Imagen para Desktop (ancho 1366px)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese Url de la imagen"
                value={imageDesktop}
                onChange={(e) => setImageDesktop(e.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Elegir Imagen"
                custom
                onChange={(e) => uploadFileHandler(e, "imageDesktop")}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId="imageTablet">
              <Form.Label>Imagen para Tablet (ancho 1024px)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese Url de la imagen"
                value={imageTablet}
                onChange={(e) => setImageTablet(e.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Elegir Imagen"
                custom
                onChange={(e) => uploadFileHandler(e, "imageTablet")}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId="imageMobile">
              <Form.Label>Imagen para Celular (ancho 768px)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese Url de la imagen"
                value={imageMobile}
                onChange={(e) => setImageMobile(e.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Elegir Imagen"
                custom
                onChange={(e) => uploadFileHandler(e, "imageMobile")}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId="show">
              <Form.Check
                type="checkbox"
                label="Mostrar"
                checked={show}
                onChange={(e) => setShow(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Button type="submit" variant="primary">
              Actualizar
            </Button>
          </Form>
        )}
      </FormContainer>
    </Container>
  );
};

export default BannerEditScreen;
