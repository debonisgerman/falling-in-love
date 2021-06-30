import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Paginate = ({
  pages,
  page,
  isAdmin = false,
  keyword = "",
  queryParams = "",
}) => {
  return (
    pages > 1 && (
      <Pagination
        first
        last
        next
        prev
        boundaryLinks
        items={pages}
        activePage={page}
      >
        {page - 4 >= 1 ? <Pagination.Ellipsis /> : ""}
        {page - 4 >= 1 ? (
          <LinkContainer
            to={
              !isAdmin
                ? keyword
                  ? queryParams
                    ? `/shop/search/${keyword}/page/${page - 4}${queryParams}`
                    : `/shop/search/${keyword}/page/${page - 4}`
                  : queryParams
                  ? `/shop/page/${page - 4}${queryParams}`
                  : `/shop/page/${page - 4}`
                : queryParams
                ? `/admin/productlist/${page - 4}${queryParams}`
                : `/admin/productlist/${page - 4}`
            }
          >
            <Pagination.Item>{page - 4}</Pagination.Item>
          </LinkContainer>
        ) : (
          ""
        )}
        {page - 3 >= 1 ? (
          <LinkContainer
            to={
              !isAdmin
                ? keyword
                  ? queryParams
                    ? `/shop/search/${keyword}/page/${page - 3}${queryParams}`
                    : `/shop/search/${keyword}/page/${page - 3}`
                  : queryParams
                  ? `/shop/page/${page - 3}${queryParams}`
                  : `/shop/page/${page - 3}`
                : queryParams
                ? `/admin/productlist/${page - 3}${queryParams}`
                : `/admin/productlist/${page - 3}`
            }
          >
            <Pagination.Item>{page - 3}</Pagination.Item>
          </LinkContainer>
        ) : (
          ""
        )}
        {page - 2 >= 1 ? (
          <LinkContainer
            to={
              !isAdmin
                ? keyword
                  ? queryParams
                    ? `/shop/search/${keyword}/page/${page - 2}${queryParams}`
                    : `/shop/search/${keyword}/page/${page - 2}`
                  : queryParams
                  ? `/shop/page/${page - 2}${queryParams}`
                  : `/shop/page/${page - 2}`
                : queryParams
                ? `/admin/productlist/${page - 2}${queryParams}`
                : `/admin/productlist/${page - 2}`
            }
          >
            <Pagination.Item>{page - 2}</Pagination.Item>
          </LinkContainer>
        ) : (
          ""
        )}
        {page - 1 >= 1 ? (
          <LinkContainer
            to={
              !isAdmin
                ? keyword
                  ? queryParams
                    ? `/shop/search/${keyword}/page/${page - 1}${queryParams}`
                    : `/shop/search/${keyword}/page/${page - 1}`
                  : queryParams
                  ? `/shop/page/${page - 1}${queryParams}`
                  : `/shop/page/${page - 1}`
                : queryParams
                ? `/admin/productlist/${page - 1}${queryParams}`
                : `/admin/productlist/${page - 1}`
            }
          >
            <Pagination.Item>{page - 1}</Pagination.Item>
          </LinkContainer>
        ) : (
          ""
        )}
        <LinkContainer
          to={
            !isAdmin
              ? keyword
                ? queryParams
                  ? `/shop/search/${keyword}/page/${page}${queryParams}`
                  : `/shop/search/${keyword}/page/${page}`
                : queryParams
                ? `/shop/page/${page}${queryParams}`
                : `/shop/page/${page}`
              : queryParams
              ? `/admin/productlist/${page}${queryParams}`
              : `/admin/productlist/${page}`
          }
        >
          <Pagination.Item active>{page}</Pagination.Item>
        </LinkContainer>
        {page + 1 <= pages ? (
          <LinkContainer
            to={
              !isAdmin
                ? keyword
                  ? queryParams
                    ? `/shop/search/${keyword}/page/${page + 1}${queryParams}`
                    : `/shop/search/${keyword}/page/${page + 1}`
                  : queryParams
                  ? `/shop/page/${page + 1}${queryParams}`
                  : `/shop/page/${page + 1}`
                : queryParams
                ? `/admin/productlist/${page + 1}${queryParams}`
                : `/admin/productlist/${page + 1}`
            }
          >
            <Pagination.Item>{page + 1}</Pagination.Item>
          </LinkContainer>
        ) : (
          ""
        )}
        {page + 2 <= pages ? (
          <LinkContainer
            to={
              !isAdmin
                ? keyword
                  ? queryParams
                    ? `/shop/search/${keyword}/page/${page + 2}${queryParams}`
                    : `/shop/search/${keyword}/page/${page + 2}`
                  : queryParams
                  ? `/shop/page/${page + 2}${queryParams}`
                  : `/shop/page/${page + 2}`
                : queryParams
                ? `/admin/productlist/${page + 2}${queryParams}`
                : `/admin/productlist/${page + 2}`
            }
          >
            <Pagination.Item>{page + 2}</Pagination.Item>
          </LinkContainer>
        ) : (
          ""
        )}
        {page + 3 <= pages ? (
          <LinkContainer
            to={
              !isAdmin
                ? keyword
                  ? queryParams
                    ? `/shop/search/${keyword}/page/${page + 3}${queryParams}`
                    : `/shop/search/${keyword}/page/${page + 3}`
                  : queryParams
                  ? `/shop/page/${page + 3}${queryParams}`
                  : `/shop/page/${page + 3}`
                : queryParams
                ? `/admin/productlist/${page + 3}${queryParams}`
                : `/admin/productlist/${page + 3}`
            }
          >
            <Pagination.Item>{page + 3}</Pagination.Item>
          </LinkContainer>
        ) : (
          ""
        )}
        {page + 4 <= pages ? (
          <LinkContainer
            to={
              !isAdmin
                ? keyword
                  ? queryParams
                    ? `/shop/search/${keyword}/page/${page + 4}${queryParams}`
                    : `/shop/search/${keyword}/page/${page + 4}`
                  : queryParams
                  ? `/shop/page/${page + 4}${queryParams}`
                  : `/shop/page/${page + 4}`
                : queryParams
                ? `/admin/productlist/${page + 4}${queryParams}`
                : `/admin/productlist/${page + 4}`
            }
          >
            <Pagination.Item>{page + 4}</Pagination.Item>
          </LinkContainer>
        ) : (
          ""
        )}
        {page + 4 <= pages ? <Pagination.Ellipsis /> : ""}
      </Pagination>
    )
  );
};

export default Paginate;
