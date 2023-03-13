import React from "react";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
// import BreadCrumb from "../components/BreadCrumb";

const SignUp = (props) => {
  return (
    <>
      {/* <BreadCrumb title="Sign Up" /> */}
      <Container classlabel="signup-wrapper home-wrapper-3 py-5 px-5">
        <div className="col-12">
          <div className="auth-card">
            <h3 className="text-center mb-3">Sign Up</h3>
            <form action="" className="d-flex flex-column gap-10">
              <CustomInput type="text" name="name" placeholder="Name" />
              <CustomInput type="email" name="email" placeholder="Email" />
              <CustomInput
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
              />
              <CustomInput
                type="password"
                name="password"
                placeholder="Password"
              />

              <div>
                <div className="d-flex mt-2 justify-content-center align-items-center gap-20">
                  <button className="signup text-white border-0 rounded-5 ">
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
