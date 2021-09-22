import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Meta from "../components/Meta";
import FormContainer from "../components/FormContainer";
import { listProfilesDetails, updateProfile } from "../actions/profileActions";
import { PROFILE_UPDATE_RESET } from "../constants/profileConstants";

const UserEditScreen = ({ match, history }) => {
  const userId = match.params.id;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [updatePassword, setUpdatePassword] = useState(false);

  const dispatch = useDispatch();

  const profileDetails = useSelector((state) => state.profileDetails);
  const { loading, error, profile } = profileDetails;
  const profileUpdate = useSelector((state) => state.profileUpdate);

  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = profileUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PROFILE_UPDATE_RESET });
      history.push("/admin/userlist");
    } else {
      if (!profile.name || profile._id !== userId) {
        dispatch(listProfilesDetails(userId));
      } else {
        setName(profile.name);
        setEmail(profile.email);
        setIsAdmin(profile.isAdmin);
      }
    }
  }, [profile, dispatch, userId, successUpdate, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateProfile({ _id: profile._id, name, email, isAdmin, password, updatePassword }));
  };

  return (
    <Container>
      <Meta />
      <Link to="/admin/userlist" className="btn btn-light my-3">
        Volver
      </Link>
      <FormContainer>
        <h1>Editar Usuario</h1>
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
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="updatePassword">
              <Form.Check
                type="checkbox"
                label="Actualizar contraseña"
                checked={updatePassword}
                onChange={(e) => setUpdatePassword(e.target.checked)}
              ></Form.Check>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={password}
                disabled={!updatePassword}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="isadmin">
              <Form.Check
                type="checkbox"
                label="Es Admin"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
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

export default UserEditScreen;
