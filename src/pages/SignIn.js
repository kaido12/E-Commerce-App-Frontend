import React from "react";
import { Link } from "react-router-dom";
// import BreadCrumb from "../components/BreadCrumb";

const SignIn = () => {
  return (
    <>
      {/* <BreadCrumb title="Sign In" /> */}
      <div className="signin-wrapper home-wrapper-3 py-5 px-5">
        <div className="row">
        <div className="container-xxl">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign In</h3>
              <form action="" className="d-flex flex-column gap-10">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <div>
                    <Link to="/forgot-password" className="mt-1 mb-1">Forgot Password</Link>
                    <div className="d-flex mt-2 justify-content-center align-items-center gap-20">
                        <button className="bttn text-white border-0 rounded-5 ">Sign In</button>
                        <Link to="/signup" className="signup text-white rounded-5">Sign Up</Link>
                    </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
