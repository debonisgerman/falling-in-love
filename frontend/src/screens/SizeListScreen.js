import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Meta from "../components/Meta";
import {
    listSizes,
    deleteSize,
    createSize
} from "../actions/sizeActions";
import { SIZE_CREATE_RESET } from "../constants/sizeConstants";

const SizeListScreen = ({ history, match }) => {
    const dispatch = useDispatch();

    const sizeList = useSelector((state) => state.sizeList);

    const { loading, error, sizes } = sizeList;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const sizeDelete = useSelector((state) => state.sizeDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = sizeDelete;

    const sizeCreate = useSelector((state) => state.sizeCreate);
    const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        size: createdSize,
    } = sizeCreate;

    useEffect(() => {
        dispatch({ type: SIZE_CREATE_RESET });
        if (!userInfo.isAdmin) {
            history.push("/login");
        }

        if (successCreate) {
            history.push(`/admin/size/${createdSize._id}/edit`);
        } else {
            dispatch(listSizes());
        }
    }, [
        dispatch,
        history,
        userInfo,
        successDelete,
        successCreate,
        createdSize,
    ]);

    const deleteHandler = (id) => {
        if (window.confirm("¿Estás Seguro?")) {
            dispatch(deleteSize(id));
        }
    };

    const createSizeHandler = () => {
        dispatch(createSize());
    };

    return (
        <Container>
            <Meta />
            <Row className="alignItems-center">
                <Col>
                    <h1>Tallas</h1>
                </Col>
                <Col className="text-right">
                    <Button className="my-3" onClick={createSizeHandler}>
                        <i className="fas fa-plus" /> Crear Talla
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
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {sizes && sizes.map((size) => (
                                <tr key={size._id}>
                                    <td>
                                        {size.name}
                                    </td>
                                    <td>
                                        <LinkContainer to={`/admin/size/${size._id}/edit`}>
                                            <Button variant="light" className="btn-sm">
                                                <i className="fa fa-edit" />
                                            </Button>
                                        </LinkContainer>
                                        <Button
                                            variant="danger"
                                            className="btn-sm"
                                            onClick={() => deleteHandler(size._id)}
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

export default SizeListScreen;