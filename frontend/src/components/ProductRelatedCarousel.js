import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import { listRelatedProducts } from "../actions/productActions";

const ProductRelatedCarousel = ({ categoryId, productId }) => {
    const dispatch = useDispatch();
    let pages = [];
    const productRelated = useSelector((state) => state.productRelated);
    const { loading, error, products } = productRelated;

    useEffect(() => {
        dispatch(listRelatedProducts({ categoryId }));
    }, [dispatch]);

    const getPages = () => {
        if (!products || products.length === 0) {
            return null;
        } else {
            let newProducts = products.filter(p => p._id.toString() !== productId.toString());
            const pagesCount = Math.ceil(newProducts.length / 3);
            if (document.getElementById("carouTitle") && newProducts.length > 0) {
                document.getElementById("carouTitle").innerHTML = "Productos Relacionados";
            }
            pages = [];
            for (let i = 0; i < pagesCount; i++) {
                pages.push(i + 1);
            }
            return pages.map((page, index) => (
                <Carousel.Item key={page}>
                    <Row className="w-100 text-center justify-content-center">{getCarouselItem(page, newProducts)}</Row>
                </Carousel.Item>
            ))
        }
    }

    const handleLink = product => {
        window.location.href = window.location.origin + `/product/${product._id}`;
    }

    const getCarouselItem = (page, products) => {
        if (!products || products.length === 0) {
            return null;
        } else {
            const rounds = page + 3;
            let items = [];
            for (let i = page; i < rounds; i++) {
                if (products[i - 1]) {
                    items.push(
                        <Col md={4} key={products[i - 1]._id}>
                            <Link onClick={() => handleLink(products[i - 1])}>
                                <Image
                                    src={
                                        products[i - 1].variants &&
                                            products[i - 1].variants[0] &&
                                            products[i - 1].variants[0].images.length > 0 ?
                                            products[i - 1].variants[0].images[0] :
                                            '/images/logo.png'
                                    }
                                    alt={products[i - 1].name}
                                    fluid="true"
                                />
                                <Carousel.Caption className="carosuel-caption">
                                    <h5>{products[i - 1].name}</h5>
                                </Carousel.Caption>
                            </Link>
                        </Col>
                    );
                }
            }
            return items
        }
    };

    return loading ? (
        <Loader />
    ) : error ? (
        <Message variant="danger">{error}</Message>
    ) : (
        <>
            <h2 id="carouTitle" className="mt-5 mb-3 secondary-blue bold text-center"></h2>
            <Carousel id="productCarousel" pause="hover" className="bg-primary" controls={false}>
                {getPages()}
            </Carousel>
        </>
    );
};

export default ProductRelatedCarousel;
