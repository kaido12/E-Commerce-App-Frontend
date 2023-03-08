import React from "react";
import BreadCrumb from "../components/BreadCrumb";

const SingleProduct = () => {
  return (
    <>
      <BreadCrumb title="Dynamic Product Name" />
      <div className="main-product-wrapper home-wrapper-3 px-5 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
      <div className="description-wrapper px-5 py-5 home-wrapper-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="bg-white p-3">
              <h4>Description</h4>
              <p >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
                doloremque beatae, quaerat illo perferendis delectus.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper py-5 px-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
