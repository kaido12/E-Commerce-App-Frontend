import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <>
      <div className="checkout-wrapper py-5 px-5 home-wrapper-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">Xnova</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="">Cart</a>
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item active" aria-current="page">
                      Library
                    </li>
                  </ol>
                </nav>
                <h4 className="title">Contact Information</h4>
                <p className="user-details">
                  Preeti Verma (preeti123@gmail.com)
                </p>
                <form
                  action=""
                  className="d-flex flex-wrap gap-15 justify-content-between"
                >
                  <div className="w-100">
                    <select
                      name=""
                      className="form-control form-select"
                      id=""
                    >
                      <option value="" selected disabled>Select Country</option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input type="text" placeholder="First Name" className="form-control" />
                  </div>
                  <div className="flex-grow-1">
                    <input type="text" placeholder="Last Name" className="form-control" />
                  </div>
                  <div className="w-100">
                    <input type="text" placeholder="Address" className="form-control" />
                  </div>
                  <div className="w-100">
                    <input type="text" placeholder="House, Apartment, Suite, etc" className="form-control" />
                  </div>
                  <div className="flex-grow-1">
                    <input type="text" placeholder="City" className="form-control" />
                  </div>
                  <div className="flex-grow-1">
                    <select
                      name=""
                      className="form-control form-select"
                      id=""
                    >
                      <option value="" selected disabled>Select State</option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input type="text" placeholder="Pincode / Zipcode" className="form-control" />
                  </div>
                  <div className="w-100">
                    <div className="d-flex">
                      <Link to="/cart" className="bttn text-white rounded-5">Return To Cart</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
