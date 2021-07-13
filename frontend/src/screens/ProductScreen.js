import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Card,
  Button,
  Form,
  Container,
  Image,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import ProductRelatedCarousel from "../components/ProductRelatedCarousel";
import { listProductsDetails } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Meta from "../components/Meta";

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const [backgroundImage, setBackgroundImage] = useState("white");
  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');
  const [variant, setVariant] = useState({});
  const [productRendered, setProductRendered] = useState(false);
  const [variantSize, setVariantSize] = useState(null);
  const [variantSizeStock, setVariantSizeStock] = useState(0);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (!productRendered) {
      dispatch(listProductsDetails(match.params.id));
    }
    if (product && product.name && !productRendered) {
      if (product.variants && product.variants.length > 0) {
        setVariant(product.variants[0]);
        setBackgroundImage(product.variants[0].images[0].split("\\").join("//"));
      } else {
        setBackgroundImage('/images/logo.png');
      }
      setProductRendered(true);
    }
  }, [dispatch, match, product, productRendered]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}&size=${variantSize}&color=${variant.color._id}`);
  };

  const setQuantity = (e) => {
    setQty(e.target.value);
    if (e.target.value > product.stock) {
      setQty(product.stock);
    }
  }

  const handleMouseMove = e => {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100
    setBackgroundPosition(`${x}% ${y}%`);
  }

  const handleImageClick = e => {
    setBackgroundImage(e.target.src);
  }

  const handleVariantChange = e => {
    setVariant(product.variants.find(p => p.color._id == e.target.value));
    setBackgroundImage(product.variants.find(p => p.color._id == e.target.value).images[0].split("\\").join("//"));
    setVariantSize(0);
    console.log(variantSize);
  }

  const handleCartDisabled = e => {
    return !variantSize || !variant.hasOwnProperty('sizes') || (variant.hasOwnProperty('sizes') && variant.sizes.length === 0);
  }

  const handleSizeChange = e => {
    setVariantSize(e.target.value);
    setVariantSizeStock(variant.sizes.find(x => x.size._id == e.target.value).stock);
    if (+qty > +variant.sizes.find(x => x.size._id == e.target.value).stock) {
      setQty(variant.sizes.find(x => x.size._id == e.target.value).stock);
    }
  }

  return (
    <Container>
      <Link className="btn btn-light my-3" to="/shop">
        Volver
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Meta title={product.name} />
          <Row>
            <Col md={4}>
              <Row>
                <figure
                  className="product-figure"
                  onMouseMove={handleMouseMove}
                  style={{ backgroundPosition, backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat' }}
                >
                  <img src={backgroundImage} alt={product.name} />
                </figure>
              </Row>
              <Row>
                {variant && variant.images && variant.images.map((image, i) => (
                  <Col>
                    <Image
                      src={image}
                      alt={i}
                      key={i}
                      fluid="true"
                      className="w100p"
                      onClick={handleImageClick}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
            <Col md={5}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{product.name}{product.price ? ` - S./ ${product.price}` : ''}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Color:</strong>
                  {variant && variant.color ? (
                    <InputGroup>
                      <FormControl
                        as="select"
                        value={variant.color._id}
                        onChange={handleVariantChange}
                      >
                        {
                          product.variants && product.variants.map((c) => (
                            <option key={c.color._id} value={c.color._id}>{c.color.name}</option>
                          ))
                        }
                      </FormControl>
                    </InputGroup>
                  ) : <></>}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Descripción:</strong> {product.description}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Categoría:</strong> {product.category ? product.category.name : 'No definido'}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Material:</strong>{" "}
                  {product.material ? product.material.reduce((accumulator, currentValue) => accumulator = accumulator + ", " + currentValue.name, "").slice(2) : "No definido"}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Sección:</strong>{" "}
                  {product.section ? product.section.reduce((accumulator, currentValue) => accumulator = accumulator + ", " + currentValue.name, "").slice(2) : "No definido"}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Talles (Stock):</strong>
                  {variant && variant.sizes ? (
                    <InputGroup>
                      <FormControl
                        as="select"
                        value={variantSize}
                        onChange={handleSizeChange}
                      >
                        <option value={null}>- Elegir</option>
                        {
                          variant && variant.sizes.map((c) => (
                            <option key={c.size._id} value={c.size._id}>{c.size.name} ({c.stock})</option>
                          ))
                        }
                      </FormControl>
                    </InputGroup>
                  ) : <></>}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col sm={6} className="text-center">
                      <a
                        href="mailto:debonis.german@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-whatsapp h2"></i>
                      </a>
                    </Col>
                    <Col sm={6} className="text-center">
                      <a
                        href="mailto:debonis.german@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fas fa-envelope-open h2"></i>
                      </a>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row className="align-items-center">
                      <Col>Cantidad</Col>
                      <Col>
                        <Form.Control
                          type="number"
                          placeholder="Cantidad"
                          value={qty}
                          onChange={(e) => setQuantity(e)}
                          min="0"
                          max={variantSizeStock}
                        ></Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Button
                      onClick={addToCartHandler}
                      className="btn-block"
                      type="button"
                      disabled={handleCartDisabled()}
                    >
                      Agregar al Carrito
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <Row className="my-3 py-3">
            <Col md={12}>
              {
                product.related ? (
                  <ProductRelatedCarousel categoryId={product.related._id} />
                ) : (
                  <></>
                )
              }

            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default ProductScreen;
