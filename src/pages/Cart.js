import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Container from "../components/Container";

const Cart = () => {
  return (
    <>
      <BreadCrumb title="Cart" />
      <Container classlabel="cart-wrapper home-wrapper-3 px-5 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header pb-1 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            <div className="cart-data mb-2 py-3 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center ">
                <div className="w-25">
                  <img
                    src="./images/boat-headphone.jpg"
                    className="img-fluid"
                    alt="product"
                  />
                </div>
                <div className="w-75">
                  <h5>Abc</h5>
                  <p>Size : hgf</p>
                  <p>Colour : </p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">₹ 1299</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    className="form-control"
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <MdDelete className="fs-3 text-danger" />
                </div>
              </div>
              <div className="cart-col-4 d-flex">
                <h5 className="price">₹ 1299</h5>
              </div>
            </div>
            <div className="cart-data mb-2 py-3 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center ">
                <div className="w-25">
                  <img
                    src="./images/bose.jpg"
                    className="img-fluid"
                    alt="product"
                  />
                </div>
                <div className="w-75">
                  <h5>Abc</h5>
                  <p>Size : hgf</p>
                  <p>Colour : </p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">₹ 32500</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    className="form-control"
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <MdDelete className="fs-3 text-danger" />
                </div>
              </div>
              <div className="cart-col-4 d-flex">
                <h5 className="price">₹ 32500</h5>
              </div>
            </div>
          </div>
          <div className="col-12 py-2">
            <div className="d-flex justify-content-between align-items-center">
              <Link to="/store" className="bttn text-white rounded-5">
                {" "}
                Continue to Shopping
              </Link>
            </div>
            <div className="subtotal-box d-flex flex-column align-items-end">
              <h4>SubTotal : ₹ 33799</h4>
              <p>Taxes and Shipping calculted at checkout</p>
              <Link
                to="/checkout"
                className="signup text-dark fw-bold rounded-5"
              >
                Checkout{" "}
                <FaArrowRight className="align-items-center mb-1 fs-6 ms-1" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
