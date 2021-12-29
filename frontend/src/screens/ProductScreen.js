import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Card,
  Button,
  Container,
  Image,
  InputGroup,
  FormControl,
  Modal,
} from "react-bootstrap";
import ProductRelatedCarousel from "../components/ProductRelatedCarousel";
import { listProductsDetails } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Meta from "../components/Meta";
import { isMobile } from 'react-device-detect'

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState("white");
  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');
  const [variant, setVariant] = useState({});
  const [productRendered, setProductRendered] = useState(false);
  const [variantSize, setVariantSize] = useState(null);
  const [show, setShow] = useState(false);
  const [qtySelector, setQtySelector] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (!productRendered || product._id !== match.params.id)
    {
      dispatch(listProductsDetails(match.params.id));
    }
    if (product && product.name && !productRendered)
    {
      if (product.variants && product.variants.length > 0)
      {
        let sizes = [];
        sizes.push(product.variants[0].sizes.find(x => x.size.name === "XS"))
        sizes.push(product.variants[0].sizes.find(x => x.size.name === "S"))
        sizes.push(product.variants[0].sizes.find(x => x.size.name === "M"))
        sizes.push(product.variants[0].sizes.find(x => x.size.name === "L"))
        sizes.push(product.variants[0].sizes.find(x => x.size.name === "XL"))
        sizes = sizes.filter(x => x);
        product.variants[0].sizes = sizes;
        setVariant(product.variants[0]);
        createQtySelector(0);
        setBackgroundImage(product.variants[0].images[0].split("\\").join("//"));
      } else
      {
        setBackgroundImage('/images/logo.png');
      }
      setProductRendered(true);
    }
  }, [dispatch, match, product, productRendered]);

  const addToCartHandler = () => {
    if (!variantSize)
    {
      document.getElementById("sizes-error").innerHTML = "No seleccionó ningún talle";
      return false;
    }
    if (qty <= 0)
    {
      document.getElementById("qty-error").innerHTML = "No seleccionó la cantidad";
      return false
    }
    history.push(`/cart/${match.params.id}?qty=${qty}&size=${variantSize}&color=${variant.color._id}`);
  };

  const handleMouseMove = e => {
    console.log("DEVICE", isMobile);
    e.preventDefault();
    if (isMobile)
    {
      e.target.style.backgroundSize = '100%';
      return;
    }
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100
    setBackgroundPosition(`${x}% ${y}%`);
  }

  const handleImageClick = e => {
    setBackgroundImage(e.target.src);
  }

  const handleVariantChange = e => {
    const pvariant = product.variants.find(p => p.color._id === e.target.value);
    let sizes = [];
    sizes.push(pvariant.sizes.find(x => x.size.name === "XS"))
    sizes.push(pvariant.sizes.find(x => x.size.name === "S"))
    sizes.push(pvariant.sizes.find(x => x.size.name === "M"))
    sizes.push(pvariant.sizes.find(x => x.size.name === "L"))
    sizes.push(pvariant.sizes.find(x => x.size.name === "XL"))
    sizes = sizes.filter(x => x);
    pvariant.sizes = sizes;

    setVariant(pvariant);
    setBackgroundImage(product.variants.find(p => p.color._id === e.target.value).images[0].split("\\").join("//"));
    setVariantSize(0);
    createQtySelector(0);
  }

  const handleSizeChange = e => {
    setVariantSize(e.target.value);
    if (e.target.value != 0)
    {
      createQtySelector(+variant.sizes.find(x => x.size._id == e.target.value).stock);
      if (+qty > +variant.sizes.find(x => x.size._id == e.target.value).stock)
      {
        setQty(variant.sizes.find(x => x.size._id == e.target.value).stock);
      }
    } else
    {
      setQty(0);
    }
  }

  const createQtySelector = (size) => {
    const elems = [];
    for (let i = 1; i <= size; i++)
    {
      elems.push(<option key={i} value={i}>{i}</option>)
    }
    setQtySelector(elems);
    if (size > 0)
    {
      setQty(1)
    }
  }

  return (
    <Container>
      <Link className="btn btn-light my-3" to="/shop">
        Volver {isMobile}
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Meta title={product.name} />
          <Row>
            <Col sm={4} md={4}>
              <Row>
                <figure
                  className="product-figure"
                  onMouseMove={handleMouseMove}
                  onDrag={handleMouseMove}
                  style={{ backgroundPosition, backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat' }}
                >
                  <img src={backgroundImage} alt={product.name} />
                </figure>
              </Row>
              <Row>
                {variant && variant.images && variant.images.map((image, i) => (
                  image ? (
                    <Col xs={2} sm={2} md={2} >
                      <Image
                        src={image}
                        alt={i}
                        key={i}
                        fluid="true"
                        className="w100p"
                        onClick={handleImageClick}
                      />
                    </Col>
                  ) : (<></>)
                ))}
              </Row>
            </Col>
            <Col md={5}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{product.name}{product.price ? ` - S/. ${product.price}` : ''}</h3>
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
                  <strong>Categoría:</strong> {product.category ? product.category.reduce((accumulator, currentValue) => accumulator = accumulator + ", " + currentValue.name, "").slice(2) : "No definido"}
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
                  <strong>Tallas (Stock):</strong>
                  {variant && variant.sizes ? (
                    <div>
                      {variant && variant.sizes.map((c) => (
                        c && c.stock != null && c.stock != undefined && c.stock > -1 ? (
                          <div key={c.size._id}>{c.size.name} {c.stock > 0 ? '('+c.stock : '(0'} {c.stock != 1 ? 'Unidades)' : 'Unidad)'}</div>
                        ) : <></>))
                      }
                    </div>
                  ) : <></>
                  }
                  {variant && variant.sizes ? (
                    <>
                      <InputGroup>
                        <FormControl
                          as="select"
                          value={variantSize}
                          onChange={handleSizeChange}
                        >
                          <option value={0}>- Elegir</option>
                          {
                            variant && variant.sizes.map((c) => (
                              c && c.stock && c.stock > 0 &&
                              <option key={c.size._id} value={c.size._id}>{c.size.name}</option>
                            ))
                          }
                        </FormControl>
                      </InputGroup>
                      <span id="sizes-error" style={{ color: 'red' }}></span>
                    </>
                  ) : <></>}
                </ListGroup.Item>
                <ListGroup.Item className="text-center">
                  <Button variant="primary" onClick={handleShow}>
                    Guía de Tallas
                  </Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Body>
                      <Image
                        src={'/images/tallas.png'}
                        alt={'guiaTallas'}
                        fluid="true"
                        style={{
                          width: '80%',
                          margin: '0 auto',
                          display: 'block'
                        }}
                      />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col sm={6} className="text-center">
                      <a
                        href={`https://wa.me/message/BC3M5NM7LNWAE1?text=Hola,%20quisiera%20saber%20más%20de%20${product.name}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-whatsapp h2"></i>
                      </a>
                    </Col>
                    <Col sm={6} className="text-center">
                      <a
                        href={`mailto:hola@fallinginlove.pe`}
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
                      <Col sm={12} md={12} lg={6}>Cantidad</Col>
                      <Col sm={12} md={12} lg={6}>
                        <FormControl
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {qtySelector}
                        </FormControl>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Button
                      onClick={addToCartHandler}
                      className="btn-block"
                      type="button"
                    // disabled={handleCartDisabled()}
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
                product.related && product.related.length > 0 ? (
                  <ProductRelatedCarousel categories={product.related.map(p => p._id)} productId={product._id} />
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
