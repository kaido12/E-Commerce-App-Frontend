import React from "react";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import ReactImageZoom from 'react-image-zoom';

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);

  const props = {width: 400, height: 500, zoomWidth: 500, img: "https://m.media-amazon.com/images/I/61kWB+uzR2L._SL1500_.jpg"};

  const ratingChanged = (newRating) => {
    return newRating;
  };

  return (
    <>
      <BreadCrumb title="Dynamic Product Name" />
      <div className="main-product-wrapper home-wrapper-3 px-5 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>   
              </div>
              <div className="adjacent-product-images d-flex flex-wrap gap-15">
                <div>
                  <img src="https://m.media-amazon.com/images/I/61+paS1uwjL._SL1500_.jpg" alt="" className="img-fluid" />
                </div>
                <div>
                  <img src="https://m.media-amazon.com/images/I/61I3R2ioAlL._SL1500_.jpg" alt="" className="img-fluid" />
                </div>
                <div>
                  <img src="https://m.media-amazon.com/images/I/61KiBcIJfQL._SL1500_.jpg" alt="" className="img-fluid" />
                </div>
                <div>
                  <img src="https://m.media-amazon.com/images/I/71y7U-eXyCL._SL1500_.jpg" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3>boAt Rockerz 370 On Ear Bluetooth Headphones</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper px-5 py-5 home-wrapper-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Harum doloremque beatae, quaerat illo perferendis delectus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper py-5 px-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
            <h3>Reviews</h3>
              <div className="review-inner-wrapper">
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
                      <a className="text-decoration-underline">
                        Write a Review
                      </a>
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
                      Quia temporibus facere laudantium officia inventore eius
                      cum non aut quaerat adipisci!
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
                      repudiandae odio facilis sunt, unde, quos rerum ea
                      quibusdam neque voluptatum voluptas vitae laborum!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
