import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
// import BreadCrumb from "../components/BreadCrumb";

const ForgotPassword = () => {
  return (
    <>
      {/* <BreadCrumb title="Forgot Password" /> */}
      <Container classlabel="forgot-password-wrapper home-wrapper-3 py-5 px-5">
        <div className="col-12">
          <div className="auth-card">
            <h3 className="text-center mb-3">Forgot ? Reset Password</h3>
            <p className="text-center mb-3">Email Will be Sent</p>
            <form action="" className="d-flex flex-column gap-10">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                />
              </div>
              <div>
                <div className="d-flex mt-2 flex-column justify-content-center align-items-center gap-20">
                  <button
                    type="submit"
                    className="bttn text-white border-0 rounded-5 "
                  >
                    Submit
                  </button>
                  <Link to="/signin" className="text-black">
                    Cancel
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ForgotPassword;
