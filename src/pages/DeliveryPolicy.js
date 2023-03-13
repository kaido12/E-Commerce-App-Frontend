import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";

const DeliveryPolicy = () => {
  return (
    <>
      <BreadCrumb title="Delivery Policy" />
      <Container classlabel="policy-wrapper py-5 px-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default DeliveryPolicy;
