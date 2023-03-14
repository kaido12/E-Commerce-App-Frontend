import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Colour from "../components/Colour";
import Container from "../components/Container";
import cross from "../images/cross.svg";
import tablet from "../images/tablet.jpg";

const CompareProducts = () => {
  return (
    <>
      <BreadCrumb title="Compare Products" />
      <Container classlabel="compare-products-wrapper home-wrapper-2 py-5 px-5">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src={cross}
                alt="cross"
                className="cross position-absolute img-fluid"
              />
              <div className="product-card-image d-flex justify-content-center ">
                <img src={tablet} height={200} alt="tablet" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Samsung Galaxy Tab S6 Lite 5G 64GB ROM / 4GB RAM
                </h5>
                <h6 className="price mb-3 mt-3">₹ 12500</h6>
                <div>
                  <div className="product-detail">
                    <h6>Brand</h6>
                    <p>Samsung</p>
                  </div>
                  <div className="product-detail">
                    <h6>Type</h6>
                    <p>Tablet</p>
                  </div>
                  <div className="product-detail">
                    <h6>Color</h6>
                    <Colour />
                  </div>
                  <div className="product-detail">
                    <h6>Availability</h6>
                    <p>Yes</p>
                  </div>
                  <div className="product-detail">
                    <h6>Size</h6>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src={cross}
                alt="cross"
                className="cross position-absolute img-fluid"
              />
              <div className="product-card-image d-flex justify-content-center ">
                <img src={tablet} height={200} alt="tablet" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Samsung Galaxy Tab S6 Lite 5G 64GB ROM / 4GB RAM
                </h5>
                <h6 className="price mb-3 mt-3">₹ 12500</h6>
                <div>
                  <div className="product-detail">
                    <h6>Brand</h6>
                    <p>Samsung</p>
                  </div>
                  <div className="product-detail">
                    <h6>Type</h6>
                    <p>Tablet</p>
                  </div>
                  <div className="product-detail">
                    <h6>Color</h6>
                    <Colour />
                  </div>
                  <div className="product-detail">
                    <h6>Availability</h6>
                    <p>Yes</p>
                  </div>
                  <div className="product-detail">
                    <h6>Size</h6>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProducts;
