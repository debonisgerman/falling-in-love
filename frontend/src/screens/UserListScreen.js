import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Meta from "../components/Meta";
import { listProfiles, deleteProfile, createProfile } from "../actions/profileActions";
import { PROFILE_CREATE_RESET } from "../constants/profileConstants";

const UserListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const profileList = useSelector((state) => state.profileList);
  const { loading, error, profiles } = profileList;

  const profileDelete = useSelector((state) => state.profileDelete);
  const { success: successDeleteProfile } = profileDelete;

  const profileCreate = useSelector((state) => state.profileCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    profile: createdProfile,
  } = profileCreate;

  useEffect(() => {
    dispatch({ type: PROFILE_CREATE_RESET });
    if (!userInfo.isAdmin) {
      history.push("/login");
    }

    if (successCreate) {
      history.push(`/admin/user/${createdProfile._id}/edit`);
    } else {
      dispatch(listProfiles());
    }

  }, [dispatch, history, userInfo, successDeleteProfile, createdProfile]);

  const deleteHandler = (id) => {
    if (window.confirm("¿Estás Seguro?")) {
      dispatch(deleteProfile(id));
    }
  };

  const createUserHandler = () => {
    dispatch(createProfile());
  };

  return (
    <Container>
      <Meta />
      <Row className="alignItems-center">
        <Col>
          <h1>Usuarios</h1>
        </Col>
        <Col className="text-right">
          <Button className="my-3" onClick={createUserHandler}>
            <i className="fas fa-plus" /> Crear Usuario
          </Button>
        </Col>
      </Row>
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant="danger">{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Admin</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <i className="fas fa-check" style={{ color: "green" }} />
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }} />
                  )}
                </td>
                <td>
                  <LinkContainer to={`/admin/user/${user._id}/edit`}>
                    <Button variant="light" className="btn-sm">
                      <i className="fa fa-edit" />
                    </Button>
                  </LinkContainer>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(user._id)}
                  >
                    <i className="fa fa-trash" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default UserListScreen;
