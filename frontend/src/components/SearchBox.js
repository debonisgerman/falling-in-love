import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/shop/search/${keyword}`);
    } else {
      history.push("/shop");
    }
  };
  return (
    <Form onSubmit={submitHandler} inline className="p-relative">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Buscar Producto..."
        className="mr-sm-2 ml-sm-5 rounded min-w-320"
        onKeyPress={(e) => e.key === "Enter" && submitHandler}
        ></Form.Control>
      <Button
        type="submit"
        variant='link'
        className="mt-2 mt-md-0 rounded p-absolute r-sm-2 r-sm-5 sm-mt-0 r-0 rotate"
      >
        <i className="fas fa-search"></i>
      </Button>
    </Form>
  );
};

export default SearchBox;
