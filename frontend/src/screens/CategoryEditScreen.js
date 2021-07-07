import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { listCategoriesDetails, updateCategory } from "../actions/categoryActions";
import {
    CATEGORY_UPDATE_RESET,
    CATEGORY_DETAILS_RESET,
} from "../constants/categoryConstants";

const CategoryEditScreen = ({ match, history }) => {
    const categoryId = match.params.id;

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [showInHome, setShowInHome] = useState(false);
    const [uploading, setUploading] = useState(false);

    const dispatch = useDispatch();

    const categoryDetails = useSelector((state) => state.categoryDetails);
    const { loading, error, category } = categoryDetails;

    const categoryUpdate = useSelector((state) => state.categoryUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = categoryUpdate;

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: CATEGORY_UPDATE_RESET });
            dispatch({ type: CATEGORY_DETAILS_RESET });
            history.push("/admin/categorylist");
        } else {
            if (!category || category._id !== categoryId) {
                dispatch(listCategoriesDetails(categoryId));
            } else {
                setName(category.name);
                setShowInHome(category.showInHome);
                setDescription(category.description);
                setImage(category.image);
            }
        }
    }, [category, dispatch, categoryId, history, successUpdate]);

    const uploadFileHandler = async (e, x) => {
        console.log(e, x);
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("image", file);
        setUploading(true);
        try {
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            };
            const { data } = await axios.post("/api/upload", formData, config);

            setImage(data);
            setUploading(false);
        } catch (error) {
            console.error(error);
            setUploading(false);
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            updateCategory({
                _id: categoryId,
                name,
                showInHome,
                image,
                description
            })
        );
    };

    return (
        <Container>
            <Link to="/admin/categorylist" className="btn btn-light my-3">
                Volver
            </Link>
            <FormContainer>
                <h1>Editar Categoría</h1>
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

                        <Form.Group controlId="image">
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese Url de la imagen"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            ></Form.Control>
                            <Form.File
                                id="image-file"
                                label="Elegir Imagen"
                                custom
                                onChange={(e) => uploadFileHandler(e, "test")}
                            ></Form.File>
                            {uploading && <Loader />}
                        </Form.Group>

                        <Form.Group controlId="description">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Descripción"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="showInHome">
                            <Form.Check
                                type="checkbox"
                                label="Mostrar"
                                checked={showInHome}
                                onChange={(e) => setShowInHome(e.target.checked)}
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

export default CategoryEditScreen;
