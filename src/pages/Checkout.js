import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import Container from "../components/Container";
import boat_headphone from "../images/boat-headphone.jpg";
import product_bose from "../images/bose.jpg";

const Checkout = () => {
  return (
    <>
      <Container classlabel="checkout-wrapper py-5 px-5 home-wrapper-1">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Xnova</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active">
                    <Link to="/cart" className="text-dark">
                      Cart
                    </Link>
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item active" aria-current="page">
                    Information
                  </li>
                  &nbsp; /<li className="breadcrumb-item active">Delivery</li>
                  &nbsp; /
                  <li className="breadcrumb-item active" aria-current="page">
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Contact Information</h4>
              <p className="user-details total-price">
                Preeti Verma (preeti123@gmail.com)
              </p>
              <h5 className="mb-3">Delivery Address</h5>
              <form
                action=""
                className="d-flex flex-wrap gap-15 justify-content-between"
              >
                <div className="w-100">
                  <select
                    name=""
                    defaultValue="select-country"
                    className="form-control form-select"
                    id=""
                  >
                    <option value="select-country" disabled>
                      Select Country
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="House, Apartment, Suite, etc"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <select
                    name=""
                    defaultValue="select-state"
                    className="form-control form-select"
                    id=""
                  >
                    <option value="select-state" disabled>
                      Select State
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Pincode / Zipcode"
                    className="form-control"
                  />
                </div>
                <div className="w-100 mt-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="bttn text-white rounded-5">
                      <AiOutlineArrowLeft className="align-items-center mb-1 fs-6 me-1" />
                      Return To Cart
                    </Link>
                    <Link to="" className="signup text-dark fw-bold rounded-5">
                      Continue to Shipping{" "}
                      <FaArrowRight className="align-items-center mb-1 fs-6 ms-1" />
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-2">
              <div className="d-flex gap-10 align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-8px", right: "2px" }}
                      className="badge bg-secondary text-white rounded-circle position-absolute"
                    >
                      1
                    </span>
                    <img
                      src= {boat_headphone}
                      className="img-fluid"
                      alt="product"
                    />
                  </div>
                  <div>
                    <h6 className="title mb-0">boAt Headphone</h6>
                    <p className="total">green</p>
                  </div>
                </div>
                <div className="d-flex flex-grow-1 justify-content-between align-items-center">
                  <h5 className="total-price text-end">₹ 1299</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-2">
              <div className="d-flex gap-10 align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-8px", right: "2px" }}
                      className="badge bg-secondary text-white rounded-circle position-absolute"
                    >
                      1
                    </span>
                    <img
                      src= {product_bose}
                      className="img-fluid"
                      alt="product"
                    />
                  </div>
                  <div>
                    <h6 className="title mb-0">Bose Speaker</h6>
                    <p className="total">black</p>
                  </div>
                </div>
                <div className="d-flex flex-grow-1 justify-content-between align-items-center">
                  <h5 className="total-price text-end">₹ 32500</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="mt-0 total">Subtotal</p>
                <p className="mt-0 total-price">₹ 33799</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Delivery</p>
                <p className="mb-0 total-price">₹ 201</p>
              </div>
            </div>
            <div className="d-flex border-bottom py-4 justify-content-between align-items-center">
              <h4 className="total">Total</h4>
              <h5 className="total-price">₹ 34000</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
