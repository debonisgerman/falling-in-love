import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Meta from "../components/Meta";
import FormContainer from "../components/FormContainer";
import { listSizesDetails, updateSize } from "../actions/sizeActions";
import {
    SIZE_UPDATE_RESET,
    SIZE_DETAILS_RESET,
} from "../constants/sizeConstants";

const SizeEditScreen = ({ match, history }) => {
    const sizeId = match.params.id;

    const [name, setName] = useState("");

    const dispatch = useDispatch();

    const sizeDetails = useSelector((state) => state.sizeDetails);
    const { loading, error, size } = sizeDetails;

    const sizeUpdate = useSelector((state) => state.sizeUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = sizeUpdate;

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: SIZE_UPDATE_RESET });
            dispatch({ type: SIZE_DETAILS_RESET });
            history.push("/admin/sizelist");
        } else {
            if (!size || size._id !== sizeId) {
                dispatch(listSizesDetails(sizeId));
            } else {
                setName(size.name);
            }
        }
    }, [size, dispatch, sizeId, history, successUpdate]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            updateSize({
                _id: sizeId,
                name,
            })
        );
    };

    return (
        <Container>
            <Meta />
            <Link to="/admin/sizelist" className="btn btn-light my-3">
                Volver
            </Link>
            <FormContainer>
                <h1>Editar Talla</h1>
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

export default SizeEditScreen;
