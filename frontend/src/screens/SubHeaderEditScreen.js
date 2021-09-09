import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Meta from "../components/Meta";
import FormContainer from "../components/FormContainer";
import { listSubHeadersDetails, updateSubHeader } from "../actions/subHeaderActions";
import {
    SUBHEADER_UPDATE_RESET,
    SUBHEADER_DETAILS_RESET,
} from "../constants/subHeaderConstants";

const SubHeaderEditScreen = ({ match, history }) => {
    const subHeaderId = match.params.id;

    const [description, setDescription] = useState("");
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();

    const subHeaderDetails = useSelector((state) => state.subHeaderDetails);
    const { loading, error, subHeader } = subHeaderDetails;

    const subHeaderUpdate = useSelector((state) => state.subHeaderUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = subHeaderUpdate;

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: SUBHEADER_UPDATE_RESET });
            dispatch({ type: SUBHEADER_DETAILS_RESET });
            history.push("/admin/subHeaderlist");
        } else {
            if (!subHeader || subHeader._id !== subHeaderId) {
                dispatch(listSubHeadersDetails(subHeaderId));
            } else {
                setDescription(subHeader.description);
                setShow(subHeader.show)
            }
        }
    }, [subHeader, dispatch, subHeaderId, history, successUpdate]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            updateSubHeader({
                _id: subHeaderId,
                description,
                show
            })
        );
    };

    return (
        <Container>
            <Meta />
            <Link to="/admin/subHeaderlist" className="btn btn-light my-3">
                Volver
            </Link>
            <FormContainer>
                <h1>Editar Sub Header</h1>
                {loadingUpdate && <Loader />}
                {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant="danger">{error}</Message>
                ) : (
                    <Form onSubmit={submitHandler}>

                        <Form.Group controlId="description">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Descripción"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="show">
                            <Form.Check
                                type="checkbox"
                                label="Mostrar"
                                checked={show}
                                onChange={(e) => setShow(e.target.checked)}
                            ></Form.Check>
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

export default SubHeaderEditScreen;
