import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col, Container, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {
    listCategories,
    deleteCategory,
    createCategory
} from "../actions/categoryActions";
import { CATEGORY_CREATE_RESET } from "../constants/categoryConstants";

const CategoryListScreen = ({ history, match }) => {
    const dispatch = useDispatch();

    const categoryList = useSelector((state) => state.categoryList);

    const { loading, error, categories } = categoryList;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const categoryDelete = useSelector((state) => state.categoryDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = categoryDelete;

    const categoryCreate = useSelector((state) => state.categoryCreate);
    const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        category: createdCategory,
    } = categoryCreate;

    useEffect(() => {
        dispatch({ type: CATEGORY_CREATE_RESET });
        if (!userInfo.isAdmin) {
            history.push("/login");
        }

        if (successCreate) {
            history.push(`/admin/category/${createdCategory._id}/edit`);
        } else {
            dispatch(listCategories());
        }
    }, [
        dispatch,
        history,
        userInfo,
        successDelete,
        successCreate,
        createdCategory,
    ]);

    const deleteHandler = (id) => {
        if (window.confirm("¿Estás Seguro?")) {
            dispatch(deleteCategory(id));
        }
    };

    const createCategoryHandler = () => {
        dispatch(createCategory());
    };

    return (
        <Container>
            <Row className="alignItems-center">
                <Col>
                    <h1>Categorías</h1>
                </Col>
                <Col className="text-right">
                    <Button className="my-3" onClick={createCategoryHandler}>
                        <i className="fas fa-plus" /> Crear Categoria
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
                                <th>Nombre</th>
                                <th>Imagen</th>
                                <th>Mostrar</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories && categories.map((category) => (
                                <tr key={category._id}>
                                    <td>
                                        {category.name}
                                    </td>
                                    <td style={{ width: "15%" }}>
                                        <Image
                                            src={category.image}
                                            alt={category._id}
                                            fluid="true"
                                        />
                                    </td>
                                    <td>{category.showInHome ? "Si" : "No"}</td>
                                    <td>
                                        <LinkContainer to={`/admin/category/${category._id}/edit`}>
                                            <Button variant="light" className="btn-sm">
                                                <i className="fa fa-edit" />
                                            </Button>
                                        </LinkContainer>
                                        <Button
                                            variant="danger"
                                            className="btn-sm"
                                            onClick={() => deleteHandler(category._id)}
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

export default CategoryListScreen;