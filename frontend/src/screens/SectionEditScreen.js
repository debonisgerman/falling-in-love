import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { listSectionsDetails, updateSection } from "../actions/sectionActions";
import {
    SECTION_UPDATE_RESET,
    SECTION_DETAILS_RESET,
} from "../constants/sectionConstants";

const SectionEditScreen = ({ match, history }) => {
    const sectionId = match.params.id;

    const [name, setName] = useState("");

    const dispatch = useDispatch();

    const sectionDetails = useSelector((state) => state.sectionDetails);
    const { loading, error, section } = sectionDetails;

    const sectionUpdate = useSelector((state) => state.sectionUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = sectionUpdate;

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: SECTION_UPDATE_RESET });
            dispatch({ type: SECTION_DETAILS_RESET });
            history.push("/admin/sectionlist");
        } else {
            if (!section || section._id !== sectionId) {
                dispatch(listSectionsDetails(sectionId));
            } else {
                setName(section.name);
            }
        }
    }, [section, dispatch, sectionId, history, successUpdate]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            updateSection({
                _id: sectionId,
                name,
            })
        );
    };

    return (
        <Container>
            <Link to="/admin/sectionlist" className="btn btn-light my-3">
                Volver
            </Link>
            <FormContainer>
                <h1>Editar Sección</h1>
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

export default SectionEditScreen;
