import React from "react";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import ReactImageZoom from "react-image-zoom";
import Colour from "../components/Colour";
import { BsHeart } from "react-icons/bs";
import { VscGitCompare } from "react-icons/vsc";
import { FiLink } from "react-icons/fi";
import Container from "../components/Container";
import ProdBlock from "../components/ProdBlock";

const SingleProduct = () => {
  const [orderedProduct] = useState(true);

  const imageLink =
    "https://m.media-amazon.com/images/I/61kWB+uzR2L._SL1500_.jpg";

  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  const props = {
    width: 400,
    height: 500,
    zoomWidth: 500,
    img: imageLink,
  };

  const ratingChanged = (newRating) => {
    return newRating;
  };

  return (
    <>
      <BreadCrumb title="Dynamic Product Name" />
      <Container classlabel="main-product-wrapper home-wrapper-3 px-5 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="adjacent-product-images d-flex flex-wrap gap-15">
              <div>
                <img
                  src="https://m.media-amazon.com/images/I/61+paS1uwjL._SL1500_.jpg"
                  alt="more-product"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://m.media-amazon.com/images/I/61I3R2ioAlL._SL1500_.jpg"
                  alt="more-product"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://m.media-amazon.com/images/I/61KiBcIJfQL._SL1500_.jpg"
                  alt="more-product"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://m.media-amazon.com/images/I/71y7U-eXyCL._SL1500_.jpg"
                  alt="more-product"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom d-flex">
                <h3 className="title">
                  boAt Rockerz 370 On Ear Bluetooth Headphones
                </h3>
                <span className="d-flex flex-column mx-4 align-items-end justify-content-end">
                  <a className="d-flex align-items-center mb-1">
                    <VscGitCompare className="me-1" /> {""}Compare
                  </a>
                  <a className="mb-2">
                    <BsHeart className="me-1" /> Wishlist
                  </a>
                </span>
              </div>
              <div className="border-bottom py-2">
                <div className="d-flex align-items-center gap-10 mb-0">
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">2 Reviews</p>
                  <h4 className="price mx-5">₹ 1299</h4>
                </div>
                <div>
                  <a href="#review" className="review-btn">
                    Write a Review
                  </a>
                </div>
              </div>
              <div className="border-bottom ">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type :</h3>
                  <p className="product-data">Headphone</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="product-data">boAt</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data">
                    Headphone, Headset, On-Ear-Earphone
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availability :</h3>
                  <p className="product-data">In Stock</p>
                </div>
                <div className="d-flex gap-10 flex-column my-2">
                  <h3 className="product-heading">Size :</h3>
                  <div className="d-flex flex-wrap gap-10">
                    <span className="badge border border-1 bg-white text-dark border-primary-subtle fs-6">
                      S
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-primary-subtle fs-6">
                      M
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-primary-subtle fs-6">
                      L
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-primary-subtle fs-6">
                      XL
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-primary-subtle fs-6">
                      XXL
                    </span>
                  </div>
                </div>
                <div className="d-flex flex-column gap-10 my-2">
                  <h3 className="product-heading">Colour :</h3>
                  <Colour />
                </div>
                <div className="d-flex gap-10 mb-2 align-items-center">
                  <h3 className="product-heading">Quantity :</h3>
                  <div>
                    <input
                      type="number"
                      min={1}
                      max={10}
                      className="form-control"
                      name=""
                      id=""
                      style={{ width: "70px" }}
                    />
                  </div>
                  <div className="d-flex align-items-center ms-4 gap-20">
                    <button to="/checkout" className="bttn text-white border-0 rounded-5 ">
                      Add To Cart
                    </button>
                    <button
                      to="/signup"
                      className="signup text-white rounded-5"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="border-bottom">
                <div className="accordion mb-2" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        <h3>Shipping & Returns</h3>
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Free shipping available on orders above ₹ 1000 and
                          free return on all orders. We ship domestic orders
                          within 5-9 business days.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <h3>About Item</h3>
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Rockerz 370 come equipped with latest Bluetooth v5.0
                          for instant wireless connectivity. The powerful 300mAh
                          battery provides up to 8 Hours of audio bliss. 40mm
                          Dynamic Drivers supply immersive High Definition
                          sound. The headset has padded earcups for a
                          comfortable experience. One can connect to Rockerz 370
                          via dual modes for connectivity in the form of
                          Bluetooth and AUX. The headphone has been
                          ergonomically and aesthetically designed for a
                          seamless experience.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <h3>In Box</h3>
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Micro USB Charging Cable, Warranty Card, User Manual
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-bottom image-link-box">
                <div className="d-flex gap-10 align-items-center my-2">
                  <a
                    href={imageLink}
                    target="_blank"
                    className="image-link"
                    onClick={() => {
                      copyToClipboard(imageLink);
                    }}
                  >
                    <FiLink /> Copy Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container classlabel="description-wrapper px-5 home-wrapper-3">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
                doloremque beatae, quaerat illo perferendis delectus.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Container classlabel="reviews-wrapper py-5 px-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3>Reviews</h3>
            <div id="review" className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-decoration-underline">Write a Review</a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>Write a Review</h4>
                <form className="d-flex flex-column gap-15 ">
                  <div className="">
                    <textarea
                      className="w-100 form-control"
                      name=""
                      cols="30"
                      rows="4"
                      placeholder="Enter a Review"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button
                      type="submit"
                      className="bttn text-white rounded-5 border-0"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div className="review-block">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Vinay Singh</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={true}
                      onChange={ratingChanged}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia temporibus facere laudantium officia inventore eius cum
                    non aut quaerat adipisci!
                  </p>
                </div>
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Katie Walsh</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={true}
                      onChange={ratingChanged}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-1">
                    Natus velit, reprehenderit illum distinctio ipsa molestiae
                    maiores eum aspernatur ratione. Cupiditate numquam
                    consectetur ut repellat voluptate culpa ipsa non,
                    repudiandae odio facilis sunt, unde, quos rerum ea quibusdam
                    neque voluptatum voluptas vitae laborum!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container classlabel="products-wrapper home-wrapper-2 pt-1 pb-2 px-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">You may also like</h3>
          </div>
          <ProdBlock />
          <ProdBlock />
          <ProdBlock />
          <ProdBlock />
          <ProdBlock />
          <ProdBlock />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
