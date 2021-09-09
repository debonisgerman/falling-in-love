import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Meta from "../components/Meta";
import {
    listSubHeaders,
    deleteSubHeader,
    createSubHeader
} from "../actions/subHeaderActions";
import { SUBHEADER_CREATE_RESET } from "../constants/subHeaderConstants";

const SubHeaderListScreen = ({ history, match }) => {
    const dispatch = useDispatch();

    const subHeaderList = useSelector((state) => state.subHeaderList);

    const { loading, error, subHeaders } = subHeaderList;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const subHeaderDelete = useSelector((state) => state.subHeaderDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = subHeaderDelete;

    const subHeaderCreate = useSelector((state) => state.subHeaderCreate);
    const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        subHeader: createdSubHeader,
    } = subHeaderCreate;

    useEffect(() => {
        dispatch({ type: SUBHEADER_CREATE_RESET });
        if (!userInfo.isAdmin) {
            history.push("/login");
        }

        if (successCreate) {
            history.push(`/admin/subHeader/${createdSubHeader._id}/edit`);
        } else {
            dispatch(listSubHeaders());
        }
    }, [
        dispatch,
        history,
        userInfo,
        successDelete,
        successCreate,
        createdSubHeader,
    ]);

    const deleteHandler = (id) => {
        if (window.confirm("¿Estás Seguro?")) {
            dispatch(deleteSubHeader(id));
        }
    };

    const createSubHeaderHandler = () => {
        dispatch(createSubHeader());
    };

    return (
        <Container>
            <Meta />
            <Row className="alignItems-center">
                <Col>
                    <h1>Tallas</h1>
                </Col>
                <Col className="text-right">
                    <Button className="my-3" onClick={createSubHeaderHandler}>
                        <i className="fas fa-plus" /> Crear Sub Header
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
                                <th>Descripción</th>
                                <th>Mostrar</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {subHeaders && subHeaders.map((subHeader) => (
                                <tr key={subHeader._id}>
                                    <td>
                                        {subHeader.description}
                                    </td>
                                    <td>
                                        {subHeader.show ? 'Si' : 'No'}
                                    </td>
                                    <td>
                                        <LinkContainer to={`/admin/subHeader/${subHeader._id}/edit`}>
                                            <Button variant="light" className="btn-sm">
                                                <i className="fa fa-edit" />
                                            </Button>
                                        </LinkContainer>
                                        <Button
                                            variant="danger"
                                            className="btn-sm"
                                            onClick={() => deleteHandler(subHeader._id)}
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

export default SubHeaderListScreen;