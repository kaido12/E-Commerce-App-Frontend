import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from "../components/BreadCrumb";

const SignUp = () => {
  return (
    <>
      {/* <BreadCrumb title="Sign Up" /> */}
      <div className="signup-wrapper home-wrapper-3 py-5 px-5">
        <div className="row">
          <div className="container xxl">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Sign Up</h3>
                <form action="" className="d-flex flex-column gap-10">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number"
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
                      <div className="d-flex mt-2 justify-content-center align-items-center gap-20">
                          <button className="signup text-white border-0 rounded-5 ">Sign Up</button>                        
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
}

export default SignUp