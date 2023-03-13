import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";

const Wishlist = () => {
  return (
    <>
      <BreadCrumb title="Wishlist" />
      <Container classlabel="wishlist-wrapper home-wrapper-2 px-5 py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="./images/cross.svg"
                alt="cross"
                className="cross position-absolute img-fluid"
              />
              <div className="wishlist-card-image d-flex justify-content-center">
                <img src="./images/tablet.jpg" height={200} alt="tablet" />
              </div>
              <div className="wishlist-details">
                <h5 className="title">
                  Samsung Galaxy Tab S6 Lite 5G 64GB ROM / 4GB RAM
                </h5>
                <h6 className="price mb-3 mt-3">₹ 12500</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="./images/cross.svg"
                alt="cross"
                className="cross position-absolute img-fluid"
              />
              <div className="wishlist-card-image d-flex justify-content-center">
                <img src="./images/tablet.jpg" height={200} alt="tablet" />
              </div>
              <div className="wishlist-details">
                <h5 className="title">
                  Samsung Galaxy Tab S6 Lite 5G 64GB ROM / 4GB RAM
                </h5>
                <h6 className="price mb-3 mt-3">₹ 12500</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="./images/cross.svg"
                alt="cross"
                className="cross position-absolute img-fluid"
              />
              <div className="wishlist-card-image d-flex justify-content-center">
                <img src="./images/tablet.jpg" height={200} alt="tablet" />
              </div>
              <div className="wishlist-details">
                <h5 className="title">
                  Samsung Galaxy Tab S6 Lite 5G 64GB ROM / 4GB RAM
                </h5>
                <h6 className="price mb-3 mt-3">₹ 12500</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
