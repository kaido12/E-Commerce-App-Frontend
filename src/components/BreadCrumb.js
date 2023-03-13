import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

const BreadCrumb = ({ title }) => {
  return (
    <Container classlabel="breadcrumb mb-0 py-3 px-5">
      <div className="row">
        <div className="col-12">
          <p className="text-center mb-0">
            <Link to="/" className="text-dark">
              Home{" "}
            </Link>{" "}
            / {title}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default BreadCrumb;
