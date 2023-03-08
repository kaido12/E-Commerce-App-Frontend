import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import { FaArrowLeft } from "react-icons/fa";
const SingleBlog = () => {
  return (
    <>
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5 px-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blog" className="d-flex align-items-center gap-10">
                  <FaArrowLeft className="fs-4" /> Back to Blogs
                </Link>
                <h3 className="title">A beautiful sunday evening glimpse</h3>
                <img
                  src="./images/blog-1.jpg"
                  className="img-fluid my-4 w-100"
                  alt="blog"
                />
                <p>
                  The sun slowly sets on the horizon, painting the sky with hues
                  of orange and pink. The cool evening breeze gently rustles the
                  leaves on the trees, creating a serene melody. The chirping of
                  birds and the distant hum of cars fill the air. The streets
                  are bathed in a warm, golden glow, casting long shadows on the
                  pavement. People stroll leisurely, enjoying the calm and
                  tranquility of the moment. It's a beautiful Sunday evening,
                  and everything feels peaceful and perfect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
