import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Meta from "../components/Meta";
import {
    listMaterials,
    deleteMaterial,
    createMaterial
} from "../actions/materialActions";
import { MATERIAL_CREATE_RESET } from "../constants/materialConstants";

const MaterialListScreen = ({ history, match }) => {
    const dispatch = useDispatch();

    const materialList = useSelector((state) => state.materialList);

    const { loading, error, materials } = materialList;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const materialDelete = useSelector((state) => state.materialDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = materialDelete;

    const materialCreate = useSelector((state) => state.materialCreate);
    const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        material: createdMaterial,
    } = materialCreate;

    useEffect(() => {
        dispatch({ type: MATERIAL_CREATE_RESET });
        if (!userInfo.isAdmin) {
            history.push("/login");
        }

        if (successCreate) {
            history.push(`/admin/material/${createdMaterial._id}/edit`);
        } else {
            dispatch(listMaterials());
        }
    }, [
        dispatch,
        history,
        userInfo,
        successDelete,
        successCreate,
        createdMaterial,
    ]);

    const deleteHandler = (id) => {
        if (window.confirm("¿Estás Seguro?")) {
            dispatch(deleteMaterial(id));
        }
    };

    const createMaterialHandler = () => {
        dispatch(createMaterial());
    };

    return (
        <Container>
            <Meta />
            <Row className="alignItems-center">
                <Col>
                    <h1>Materiales</h1>
                </Col>
                <Col className="text-right">
                    <Button className="my-3" onClick={createMaterialHandler}>
                        <i className="fas fa-plus" /> Crear Material
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
                            {materials && materials.map((material) => (
                                <tr key={material._id}>
                                    <td>
                                        {material.name}
                                    </td>
                                    <td>
                                        <LinkContainer to={`/admin/material/${material._id}/edit`}>
                                            <Button variant="light" className="btn-sm">
                                                <i className="fa fa-edit" />
                                            </Button>
                                        </LinkContainer>
                                        <Button
                                            variant="danger"
                                            className="btn-sm"
                                            onClick={() => deleteHandler(material._id)}
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

export default MaterialListScreen;