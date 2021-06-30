import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { listProductsDetails, updateProduct } from "../actions/productActions";
import {
  PRODUCT_UPDATE_RESET,
  PRODUCT_DETAILS_RESET,
} from "../constants/productConstants";

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id;

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [material, setMaterial] = useState("");
  const [section, setSection] = useState("");
  const [code, setCode] = useState("");
  const [uploading, setUploading] = useState(false);
  const [leading, setLeading] = useState(false);
  const [size, setSize] = useState([]);
  const [stock, setStock] = useState(0);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      dispatch({ type: PRODUCT_DETAILS_RESET });
      history.push("/admin/productlist");
    } else {
      if (!product || !product.name || product._id !== productId) {
        dispatch(listProductsDetails(productId));
      } else {
        setName(product.name);
        setImage(product.image);
        setDescription(product.description);
        setCategory(product.category);
        setMaterial(product.material);
        setSection(product.section);
        setCode(product.code);
        setLeading(product.leading);
        setSize(product.size ? product.size : []);
        setStock(product.stock ? product.stock : 0);
      }
    }
  }, [product, dispatch, productId, history, successUpdate]);

  const uploadFileHandler = async (e, x) => {
    console.log(e, x);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post("/api/upload", formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        image,
        description,
        category,
        material,
        section,
        code,
        leading,
        size,
        stock
      })
    );
  };

  const onCheckChange = (e) => {
    let newSizes = [...size];
    if (e.target.checked) {
      newSizes.push(e.target.id.split("talle-")[1]);
    } else {
      const value = e.target.id.split("talle-")[1];
      newSizes = newSizes.filter(x => x !== value);
    }
    setSize(newSizes);
  }

  return (
    <Container>
      <Link to="/admin/productlist" className="btn btn-light my-3">
        Volver
      </Link>
      <FormContainer>
        <h1>Editar Producto</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="image">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese Url de la imagen"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Elegir Imagen"
                custom
                onChange={(e) => uploadFileHandler(e, "test")}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId="category">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                type="text"
                placeholder="Categoría"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="material">
              <Form.Label>Material</Form.Label>
              <Form.Control
                type="text"
                placeholder="Material"
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="section">
              <Form.Label>Sección</Form.Label>
              <Form.Control
                type="text"
                placeholder="Sección"
                value={section}
                onChange={(e) => setSection(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="size">
              <Form.Label>Talle</Form.Label>
              <div key={`talle`} className="mb-3">
                <Form.Check
                  checked={size && size.indexOf('XS') !== -1}
                  onChange={onCheckChange}
                  custom
                  inline
                  value="XS"
                  name="XS"
                  label="XS"
                  type='checkbox'
                  id="talle-XS"
                />
                <Form.Check
                  checked={size && size.indexOf('S') !== -1}
                  onChange={onCheckChange}
                  custom
                  inline
                  value="S"
                  name="S"
                  label="S"
                  type='checkbox'
                  id="talle-S"
                />
                <Form.Check
                  checked={size && size.indexOf('M') !== -1}
                  onChange={onCheckChange}
                  custom
                  inline
                  value="M"
                  name="M"
                  label="M"
                  type='checkbox'
                  id="talle-M"
                />
                <Form.Check
                  checked={size && size.indexOf('L') !== -1}
                  onChange={onCheckChange}
                  custom
                  inline
                  value="L"
                  name="L"
                  label="L"
                  type='checkbox'
                  id="talle-L"
                />
                <Form.Check
                  checked={size && size.indexOf('XL') !== -1}
                  onChange={onCheckChange}
                  custom
                  inline
                  value="XL"
                  name="XL"
                  label="XL"
                  type='checkbox'
                  id="talle-XL"
                />
              </div>
            </Form.Group>

            <Form.Group controlId="stock">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                placeholder="Stock"
                value={stock}
                min={0}
                onChange={(e) => setStock(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="code">
              <Form.Label>Código</Form.Label>
              <Form.Control
                type="text"
                placeholder="Código"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="leading">
              <Form.Check
                type="checkbox"
                label="Producto Destacado"
                checked={leading}
                onChange={(e) => setLeading(e.target.checked)}
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

export default ProductEditScreen;
