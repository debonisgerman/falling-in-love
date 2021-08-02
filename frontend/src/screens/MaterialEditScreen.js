import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Meta from "../components/Meta";
import FormContainer from "../components/FormContainer";
import { listMaterialsDetails, updateMaterial } from "../actions/materialActions";
import {
    MATERIAL_UPDATE_RESET,
    MATERIAL_DETAILS_RESET,
} from "../constants/materialConstants";

const MaterialEditScreen = ({ match, history }) => {
    const materialId = match.params.id;

    const [name, setName] = useState("");

    const dispatch = useDispatch();

    const materialDetails = useSelector((state) => state.materialDetails);
    const { loading, error, material } = materialDetails;

    const materialUpdate = useSelector((state) => state.materialUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = materialUpdate;

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: MATERIAL_UPDATE_RESET });
            dispatch({ type: MATERIAL_DETAILS_RESET });
            history.push("/admin/materiallist");
        } else {
            if (!material || material._id !== materialId) {
                dispatch(listMaterialsDetails(materialId));
            } else {
                setName(material.name);
            }
        }
    }, [material, dispatch, materialId, history, successUpdate]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            updateMaterial({
                _id: materialId,
                name,
            })
        );
    };

    return (
        <Container>
            <Meta />
            <Link to="/admin/materiallist" className="btn btn-light my-3">
                Volver
            </Link>
            <FormContainer>
                <h1>Editar Material</h1>
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

                        <Button type="submit" variant="primary">
                            Actualizar
                        </Button>
                    </Form>
                )}
            </FormContainer>
        </Container>
    );
};

export default MaterialEditScreen;
