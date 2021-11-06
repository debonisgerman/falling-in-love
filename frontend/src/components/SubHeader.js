import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import { listSubHeaders } from "../actions/subHeaderActions";

const SubHeader = () => {
  const dispatch = useDispatch();

  const sb = useSelector((state) => state.subHeaderList);
  const { loading, error, subHeaders } = sb;

  useEffect(() => {
    dispatch(listSubHeaders());
  }, [dispatch]);

  return (
    loading ? (
      <Loader />
    ) : error ? (
      <Message variant="danger">{error}</Message>
    ) : (
      <div className="bg-primary subheader">
        <Container>
          <h6 className="text-center p-2 m-0">{subHeaders && subHeaders.filter(x => x.show).length > 0 && subHeaders.filter(x => x.show)[0].description}</h6>
        </Container>
      </div>
    )
  );
};

export default SubHeader;
