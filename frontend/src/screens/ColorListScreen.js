import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {
    listColors,
    deleteColor,
    createColor
} from "../actions/colorActions";
import { COLOR_CREATE_RESET } from "../constants/colorConstants";

const ColorListScreen = ({ history, match }) => {
    const dispatch = useDispatch();

    const colorList = useSelector((state) => state.colorList);

    const { loading, error, colors } = colorList;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const colorDelete = useSelector((state) => state.colorDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = colorDelete;

    const colorCreate = useSelector((state) => state.colorCreate);
    const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        color: createdColor,
    } = colorCreate;

    useEffect(() => {
        dispatch({ type: COLOR_CREATE_RESET });
        if (!userInfo.isAdmin) {
            history.push("/login");
        }

        if (successCreate) {
            history.push(`/admin/color/${createdColor._id}/edit`);
        } else {
            dispatch(listColors());
        }
    }, [
        dispatch,
        history,
        userInfo,
        successDelete,
        successCreate,
        createdColor,
    ]);

    const deleteHandler = (id) => {
        if (window.confirm("¿Estás Seguro?")) {
            dispatch(deleteColor(id));
        }
    };

    const createColorHandler = () => {
        dispatch(createColor());
    };

    return (
        <Container>
            <Row className="alignItems-center">
                <Col>
                    <h1>Colores</h1>
                </Col>
                <Col className="text-right">
                    <Button className="my-3" onClick={createColorHandler}>
                        <i className="fas fa-plus" /> Crear Color
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
                                <th>Color</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {colors && colors.map((color) => (
                                <tr key={color._id}>
                                    <td>
                                        {color.name}
                                    </td>
                                    <td style={{ backgroundColor: color.color ? color.color : 'white' }}>
                                    </td>
                                    <td>
                                        <LinkContainer to={`/admin/color/${color._id}/edit`}>
                                            <Button variant="light" className="btn-sm">
                                                <i className="fa fa-edit" />
                                            </Button>
                                        </LinkContainer>
                                        <Button
                                            variant="danger"
                                            className="btn-sm"
                                            onClick={() => deleteHandler(color._id)}
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

export default ColorListScreen;