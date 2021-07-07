import React from "react";
import { Accordion, ListGroup, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Message from "../components/Message";
import Loader from "../components/Loader";

const Filter = ({ loadingFilters, errorFilters, parsed, keyword, filters }) => {
  const filterClicked = (filter, filterValue) => {
    const hasFilter = window.location.href.indexOf("?") > -1;
    if (!hasFilter) {
      window.location.href = window.location.href + `?${filter}=` + filterValue;
    } else {
      const hasFilterValue = window.location.href.indexOf(`${filter}=`) > -1;
      if (!hasFilterValue) {
        window.location.href =
          window.location.href + `&${filter}=` + filterValue;
      } else {
        const filtersSplitted = window.location.href.split("?")[1];
        let filtersSplit;
        if (filtersSplitted) {
          filtersSplit = filtersSplitted.split("&");
          filtersSplit = filtersSplit.filter(
            (item) => item.indexOf(`${filter}=`) > -1
          )[0];
          filtersSplit = filtersSplit.split(`${filter}=`)[1];
        }

        if (filtersSplit === filterValue) {
          const prevChar =
            window.location.href[
              window.location.href.indexOf(`${filter}=`) - 1
            ];
          const nextChar =
            window.location.href[
              window.location.href.indexOf(`${filter}=` + filtersSplit) +
                (`${filter}=` + filtersSplit).length
            ];
          if (prevChar === "?" && nextChar === "&") {
            window.location.href = window.location.href
              .split(`${filter}=` + filtersSplit + nextChar)
              .join("");
          } else {
            window.location.href = window.location.href
              .split(prevChar + `${filter}=` + filtersSplit)
              .join("");
          }
        } else {
          window.location.href = window.location.href
            .split(`${filter}=` + filtersSplit)
            .join(`${filter}=` + filterValue);
        }
      }
    }
  };

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
              <Accordion>
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
              <Accordion>
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
              <Accordion>
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
          </ListGroup>
        </>
      )}
    </>
  );
};

export default Filter;
