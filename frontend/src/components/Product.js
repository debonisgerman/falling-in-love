import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";

const Product = ({ product }) => {
  const productImage = product.variants &&
    product.variants[0] &&
    product.variants[0].images.length > 0 ?
    product.variants[0].images[0] :
    '/images/logo.png';

  console.log(product);
  let isOutOfStock = true;
  for (let i in product.variants)
  {
    for (let j in product.variants[i].sizes)
    {
      if (product.variants[i].sizes[j].stock > 0)
      {
        isOutOfStock = false;
      }
    }
  }

  const handleLink = e => {
    window.location.href = window.location.href.split("/shop")[0] + `/product/${product._id}`;
  }

  return (
    <Card className="my-3 p-3 rounded w100p">
      <Link onClick={handleLink} className='img-prod-cont'>
        {isOutOfStock && (<div variant="top" className='img-prod' style={{
          backgroundImage: `url(/uploads/agotado.png), url(${productImage.split("\\").join("/")})`,
          backgroundSize: '30%, contain',
          backgroundRepeat: 'no-repeat, no-repeat',
          backgroundPosition: '40% top,center center',
        }}></div>)}
        {!isOutOfStock && (<Card.Img src={productImage} variant="top" className='img-prod' />)}
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="p">
          <strong>Precio: </strong>
          {product.price ? ` S/. ${product.price}` : "No definido"}
        </Card.Text>
        {!isOutOfStock && (
          <>
            <Card.Text as="p">
              <strong>Tallas: </strong>
              {
                product.variants &&
                  product.variants.length > 0 ?
                  [...new Set(product.variants.reduce((accumulator, currentValue) => accumulator = accumulator + ", " + currentValue.sizes.reduce((ac, cv) => ac + ", " + cv.size.name, "").slice(2), "").slice(2).split(", "))].join(", ") :
                  'Sin Stock'
              }
            </Card.Text>
            <Card.Text as="p">
              <Row className="align-items-center">
                {
                  product.variants && product.variants.length > 0 && product.variants.map((variant) => (
                    <Col className="text-center">
                      <div style={{
                        width: '25px',
                        height: '25px',
                        borderRadius: '50%',
                        backgroundColor: variant.color.color,
                        margin: '0 auto',
                        border: '1px solid #bababa'
                      }}></div>
                      <div>{variant.color.name}</div>
                    </Col>
                  ))
                }
              </Row>
            </Card.Text>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default Product;
