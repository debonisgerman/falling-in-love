import React, { useState, useEffect } from "react";
import { Accordion, ListGroup, Card, Row, Col, InputGroup, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import Message from "../components/Message";
import Loader from "../components/Loader";

const Filter = ({ loadingFilters, errorFilters, parsed, keyword, filters }) => {
  const [fromPrice, setFromPrice] = useState(null);
  const [toPrice, setToPrice] = useState(null);

  useEffect(() => {
    if (!loadingFilters)
    {
      if (filters && filters.price)
      {
        if (filters.price.indexOf("to") !== -1)
        {
          setToPrice(filters.price.split("to")[1]);
          setFromPrice(filters.price.split("to")[0]);
        } else
        {
          setFromPrice(filters.price);
        }
      }
    }
  }, [loadingFilters]);

  const filterClicked = (filter, filterValue) => {
    const hasFilter = window.location.href.indexOf("?") > -1;
    if (!hasFilter)
    {
      window.location.href = window.location.href + `?${filter}=` + filterValue;
    } else
    {
      const hasFilterValue = window.location.href.indexOf(`${filter}=`) > -1;
      if (!hasFilterValue)
      {
        window.location.href =
          window.location.href + `&${filter}=` + filterValue;
      } else
      {
        const filtersSplitted = window.location.href.split("?")[1];
        let filtersSplit;
        if (filtersSplitted)
        {
          filtersSplit = filtersSplitted.split("&");
          filtersSplit = filtersSplit.filter(
            (item) => item.indexOf(`${filter}=`) > -1
          )[0];
          filtersSplit = filtersSplit.split(`${filter}=`)[1];
        }

        if (filtersSplit === filterValue)
        {
          const prevChar =
            window.location.href[
            window.location.href.indexOf(`${filter}=`) - 1
            ];
          const nextChar =
            window.location.href[
            window.location.href.indexOf(`${filter}=` + filtersSplit) +
            (`${filter}=` + filtersSplit).length
            ];
          if (prevChar === "?" && nextChar === "&")
          {
            window.location.href = window.location.href
              .split(`${filter}=` + filtersSplit + nextChar)
              .join("");
          } else
          {
            window.location.href = window.location.href
              .split(prevChar + `${filter}=` + filtersSplit)
              .join("");
          }
        } else
        {
          window.location.href = window.location.href
            .split(`${filter}=` + filtersSplit)
            .join(`${filter}=` + filterValue);
        }
      }
    }
  };

  const handlePrice = (e) => {
    if (toPrice < fromPrice)
    {
      alert("El precio hasta no puede ser menor al precio desde");
      return false;
    }
    let filterPrice = (fromPrice ? fromPrice : 0) + "to";
    filterPrice = (toPrice ? filterPrice + toPrice : filterPrice.split("to").join(""));
    filterClicked('price', filterPrice);
  }

  return (
    <>
      <h5>
        <b>Refinar búsqueda</b>
      </h5>
      {loadingFilters ? (
        <Loader />
      ) : errorFilters ? (
        <Message variant="danger">{errorFilters}</Message>
      ) : (
        <>
          {(parsed.section ||
            parsed.category ||
            parsed.material ||
            parsed.color ||
            keyword) && (
              <>
                <p>
                  Filtrando por:
                  {parsed.section ? (
                    <>
                      <br /> Sección: {parsed.section}
                    </>
                  ) : (
                    ""
                  )}
                  {parsed.category ? (
                    <>
                      <br /> Categoría: {parsed.category}
                    </>
                  ) : (
                    ""
                  )}
                  {parsed.material ? (
                    <>
                      <br /> Material: {parsed.material}
                    </>
                  ) : (
                    ""
                  )}
                  {parsed.color ? (
                    <>
                      <br /> Color: {parsed.color}
                    </>
                  ) : (
                    ""
                  )}
                  {keyword ? (
                    <>
                      <br /> Búsqueda: {keyword}
                    </>
                  ) : (
                    ""
                  )}
                </p>
                <Link
                  className="btn btn-block btn-primary"
                  onClick={() =>
                  (window.location.href =
                    window.location.origin + window.location.pathname)
                  }
                  to="/shop"
                >
                  Limpiar Filtros
                </Link>
              </>
            )}
          <ListGroup>
            <ListGroup.Item>
              <Accordion className="filter-accordion">
                <Accordion.Toggle as={Card.Header} className="pointer" eventKey="0">
                  <b>Sección</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <ListGroup variant="flush">
                    {filters &&
                      filters.sections &&
                      filters.sections.sort().map((section, index) => (
                        <ListGroup.Item
                          key={index}
                          action
                          onClick={() => filterClicked("section", section)}
                        >
                          {section === parsed.section ? (
                            <b className="filterSelected">{section}</b>
                          ) : (
                            section
                          )}
                        </ListGroup.Item>
                      ))}
                  </ListGroup>
                </Accordion.Collapse>
              </Accordion>
            </ListGroup.Item>
            <ListGroup.Item>
              <Accordion className="filter-accordion">
                <Accordion.Toggle as={Card.Header} className="pointer" eventKey="0">
                  <b>Categoría</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <ListGroup variant="flush">
                    {filters &&
                      filters.categories &&
                      filters.categories.sort().map((category, index) => (
                        <ListGroup.Item
                          key={index}
                          action
                          onClick={() => filterClicked("category", category)}
                        >
                          {category === parsed.category ? (
                            <b className="filterSelected">{category}</b>
                          ) : (
                            category
                          )}
                        </ListGroup.Item>
                      ))}
                  </ListGroup>
                </Accordion.Collapse>
              </Accordion>
            </ListGroup.Item>
            <ListGroup.Item>
              <Accordion className="filter-accordion">
                <Accordion.Toggle as={Card.Header} className="pointer" eventKey="0">
                  <b>Material</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <ListGroup variant="flush">
                    {filters &&
                      filters.materials &&
                      filters.materials.sort().map((material, index) => (
                        <ListGroup.Item
                          key={index}
                          action
                          onClick={() => filterClicked("material", material)}
                        >
                          {material === parsed.material ? (
                            <b className="filterSelected">{material}</b>
                          ) : (
                            material
                          )}
                        </ListGroup.Item>
                      ))}
                  </ListGroup>
                </Accordion.Collapse>
              </Accordion>
            </ListGroup.Item>
            <ListGroup.Item>
              <Accordion className="filter-accordion">
                <Accordion.Toggle as={Card.Header} className="pointer" eventKey="0">
                  <b>Color</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <ListGroup variant="flush">
                    {filters &&
                      filters.colors &&
                      filters.colors.sort().map((color, index) => (
                        <ListGroup.Item
                          key={index}
                          action
                          onClick={() => filterClicked("color", color)}
                        >
                          {color === parsed.color ? (
                            <b className="filterSelected">{color}</b>
                          ) : (
                            color
                          )}
                        </ListGroup.Item>
                      ))}
                  </ListGroup>
                </Accordion.Collapse>
              </Accordion>
            </ListGroup.Item>
            <ListGroup.Item>
              <Accordion className="filter-accordion">
                <Accordion.Toggle as={Card.Header} className="pointer" eventKey="0">
                  <b>Precio (S/.)</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Row>
                        <Col>
                          <div>Desde</div>
                          <InputGroup>
                            <FormControl
                              type="number"
                              placeholder="Desde"
                              value={fromPrice}
                              min={0.00}
                              step={0.01}
                              onChange={(e) => setFromPrice(e.target.value)}
                            ></FormControl>
                          </InputGroup>
                        </Col>
                        <Col>
                          <div>Hasta</div>
                          <InputGroup>
                            <FormControl
                              type="number"
                              placeholder="Hasta"
                              value={toPrice}
                              min={0.00}
                              step={0.01}
                              onChange={(e) => setToPrice(e.target.value)}
                            ></FormControl>
                          </InputGroup>
                        </Col>
                      </Row>
                      <Row className="mt-2">
                        <Col>
                          <Button
                            className="btn-block btn-primary rounded"
                            onClick={handlePrice}
                          >
                            Aplicar
                          </Button>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  </ListGroup>
                </Accordion.Collapse>
              </Accordion>
            </ListGroup.Item>
          </ListGroup>
        </>
      )}
    </>
  );
};

export default Filter;
