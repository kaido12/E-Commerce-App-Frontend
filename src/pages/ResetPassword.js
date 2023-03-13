import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
// import BreadCrumb from "../components/BreadCrumb";

const ResetPassword = () => {
  return (
    <>
      {/* <BreadCrumb title="Reset Password" /> */}
      <Container classlabel="reset-password-wrapper home-wrapper-3 py-5 px-5">
        <div className="col-12">
          <div className="auth-card">
            <h3 className="text-center mb-3">Reset Password</h3>
            <form action="" className="d-flex flex-column gap-10">
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="confirm password"
                  placeholder=" Confirm Password"
                  className="form-control"
                />
              </div>
              <div>
                <div className="d-flex mt-2 flex-column justify-content-center align-items-center gap-20">
                  <button
                    type="submit"
                    className="bttn text-white border-0 rounded-5 "
                  >
                    Reset
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

export default ResetPassword;
