import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Meta from "../components/Meta";
import FormContainer from "../components/FormContainer";
import { listColorsDetails, updateColor } from "../actions/colorActions";
import {
    COLOR_UPDATE_RESET,
    COLOR_DETAILS_RESET,
} from "../constants/colorConstants";

const ColorEditScreen = ({ match, history }) => {
    const colorId = match.params.id;

    const [name, setName] = useState("");
    const [colorE, setColor] = useState("");

    const dispatch = useDispatch();

    const colorDetails = useSelector((state) => state.colorDetails);
    const { loading, error, color } = colorDetails;

    const colorUpdate = useSelector((state) => state.colorUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = colorUpdate;

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: COLOR_UPDATE_RESET });
            dispatch({ type: COLOR_DETAILS_RESET });
            history.push("/admin/colorlist");
        } else {
            if (!color || color._id !== colorId) {
                dispatch(listColorsDetails(colorId));
            } else {
                setName(color.name);
                setColor(color.color);
            }
        }
    }, [color, dispatch, colorId, history, successUpdate]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            updateColor({
                _id: colorId,
                name,
                color: colorE,
            })
        );
    };

    return (
        <Container>
            <Meta />
            <Link to="/admin/colorlist" className="btn btn-light my-3">
                Volver
            </Link>
            <FormContainer>
                <h1>Editar Color</h1>
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

                        <Form.Group controlId="colorE">
                            <Form.Label>Color</Form.Label>
                            <Form.Control
                                type="color"
                                placeholder="Color"
                                value={colorE}
                                onChange={(e) => setColor(e.target.value)}
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

export default ColorEditScreen;
