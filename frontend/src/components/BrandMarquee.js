import React from "react";
import { Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

// http://localhost:3000/shop

const BrandMarquee = () => {
  return (
    <div className="marquee">
      <p>
        <LinkContainer to="/shop">
          <Image
            src="/images/adex.png"
            alt="adex"
            fluid="true"
            className="mx-3"
          />
        </LinkContainer>
        <LinkContainer to="/shop">
          <Image
            src="/images/aurita.jpg"
            alt="aurita"
            fluid="true"
            className="mx-3"
          />
        </LinkContainer>
        <LinkContainer to="/shop">
          <Image
            src="/images/cimberio.jpg"
            alt="cimberio"
            fluid="true"
            className="mx-3"
          />
        </LinkContainer>
        <LinkContainer to="/shop">
          <Image
            src="/images/coflex.png"
            alt="coflex"
            fluid="true"
            className="mx-3"
          />
        </LinkContainer>
        <LinkContainer to="/shop">
          <Image
            src="/images/genebre.png"
            alt="genebre"
            fluid="true"
            className="mx-3"
          />
        </LinkContainer>
        <LinkContainer to="/shop">
          <Image
            src="/images/induval.jpg"
            alt="induval"
            fluid="true"
            className="mx-3"
          />
        </LinkContainer>
        <LinkContainer to="/shop">
          <Image
            src="/images/italgrif.png"
            alt="italgrif"
            fluid="true"
            className="mx-3"
          />
        </LinkContainer>
        <LinkContainer to="/shop">
          <Image
            src="/images/metusa.jpg"
            alt="metusa"
            fluid="true"
            className="mx-3"
          />
        </LinkContainer>
        <LinkContainer to="/shop">
          <Image
            src="/images/oatey.png"
            alt="oatey"
            fluid="true"
            className="mx-3"
          />
        </LinkContainer>
        <LinkContainer to="/shop">
          <Image
            src="/images/pcp.png"
            alt="pcp"
            fluid="true"
            className="mx-3"
          />
        </LinkContainer>
        <LinkContainer to="/shop">
          <Image
            src="/images/sanking.jpg"
            alt="sanking"
            fluid="true"
            className="mx-3"
          />
        </LinkContainer>
        <LinkContainer to="/shop">
          <Image
            src="/images/vainsa.jpg"
            alt="vainsa"
            fluid="true"
            className="mx-3"
          />
        </LinkContainer>
      </p>
    </div>
  );
};

export default BrandMarquee;
