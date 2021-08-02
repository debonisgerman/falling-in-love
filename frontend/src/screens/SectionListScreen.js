import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Meta from "../components/Meta";
import {
    listSections,
    deleteSection,
    createSection
} from "../actions/sectionActions";
import { SECTION_CREATE_RESET } from "../constants/sectionConstants";

const SectionListScreen = ({ history, match }) => {
    const dispatch = useDispatch();

    const sectionList = useSelector((state) => state.sectionList);

    const { loading, error, sections } = sectionList;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const sectionDelete = useSelector((state) => state.sectionDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = sectionDelete;

    const sectionCreate = useSelector((state) => state.sectionCreate);
    const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        section: createdSection,
    } = sectionCreate;

    useEffect(() => {
        dispatch({ type: SECTION_CREATE_RESET });
        if (!userInfo.isAdmin) {
            history.push("/login");
        }

        if (successCreate) {
            history.push(`/admin/section/${createdSection._id}/edit`);
        } else {
            dispatch(listSections());
        }
    }, [
        dispatch,
        history,
        userInfo,
        successDelete,
        successCreate,
        createdSection,
    ]);

    const deleteHandler = (id) => {
        if (window.confirm("¿Estás Seguro?")) {
            dispatch(deleteSection(id));
        }
    };

    const createSectionHandler = () => {
        dispatch(createSection());
    };

    return (
        <Container>
            <Meta />
            <Row className="alignItems-center">
                <Col>
                    <h1>Secciones</h1>
                </Col>
                <Col className="text-right">
                    <Button className="my-3" onClick={createSectionHandler}>
                        <i className="fas fa-plus" /> Crear Sección
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
                            {sections && sections.map((section) => (
                                <tr key={section._id}>
                                    <td>
                                        {section.name}
                                    </td>
                                    <td>
                                        <LinkContainer to={`/admin/section/${section._id}/edit`}>
                                            <Button variant="light" className="btn-sm">
                                                <i className="fa fa-edit" />
                                            </Button>
                                        </LinkContainer>
                                        <Button
                                            variant="danger"
                                            className="btn-sm"
                                            onClick={() => deleteHandler(section._id)}
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

export default SectionListScreen;