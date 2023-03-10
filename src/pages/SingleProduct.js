import React from "react";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import ReactImageZoom from 'react-image-zoom';
import Colour from "../components/Colour";
import { BsHeart } from "react-icons/bs";
import { VscGitCompare } from "react-icons/vsc"; 

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
                <div className="border-bottom d-flex">                
                  <h3 className="title">boAt Rockerz 370 On Ear Bluetooth Headphones</h3>                
                  <span className="d-flex flex-column mx-4 align-items-end justify-content-end">
                    <a className="d-flex align-items-center mb-1" href=""><VscGitCompare className="me-1" /> {""}Compare</a>
                    <a href="" className="mb-2"><BsHeart className="me-1" /> Wishlist</a>
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
                    <p className="product-data">Boat</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags :</h3>
                    <p className="product-data">Headphone, Headset, On-Ear-Earphone</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availability :</h3>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column my-2">
                    <h3 className="product-heading">Size :</h3>
                    <div className="d-flex flex-wrap gap-10">
                    <span className="badge border border-1 bg-white text-dark border-primary-subtle fs-6">S</span>
                    <span className="badge border border-1 bg-white text-dark border-primary-subtle fs-6">M</span>
                    <span className="badge border border-1 bg-white text-dark border-primary-subtle fs-6">L</span>
                    <span className="badge border border-1 bg-white text-dark border-primary-subtle fs-6">XL</span>
                    <span className="badge border border-1 bg-white text-dark border-primary-subtle fs-6">XXL</span>

                    </div>
                  </div>
                  <div className="d-flex flex-column gap-10 my-2">
                    <h3 className="product-heading">Colour :</h3>
                    <Colour  />
                  </div>
                  <div className="d-flex gap-10 mb-2 align-items-center">
                    <h3 className="product-heading">Quantity :</h3>
                    <div>
                      <input type="number" min={1} max={10} className="form-control" name="" id="" style={{width: "70px"}} />
                    </div>
                    <div className="d-flex align-items-center ms-4 gap-20">
                      <button className="bttn text-white border-0 rounded-5 ">Add To Card</button>
                      <button to="/signup" className="signup text-white rounded-5">Buy Now</button>
                    </div>
                  </div>
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
