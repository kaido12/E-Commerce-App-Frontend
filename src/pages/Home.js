import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5 px-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6 position-relative">
              <div className="banner p-1 object-fit-contain">
                <img
                  src="./images/banner.jpg"
                  alt="main banner"
                  className="img-fluid rounded-3"
                />
                <div className="banner-content position-absolute text-justify d-flex flex-column align-items-end">
                  <Link className="text-primary py-2">
                    <button
                      type="button"
                      className="btn btn-outline-danger rounded-pill btn-sm"
                    >
                      Buy Now
                    </button>
                  </Link>
                  <h6>Only ₹2500</h6>
                  <h6 className="py-1">Boat Immortal 700</h6>
                  <h5 className="text-success">THUNDER WITHIN YOU</h5>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="d-flex flex-nowrap position-relative justify-content-between">
                <div className="small-banner position-relaive p-1 pb-3">
                  <img
                    src="./images/catbanner-02.jpg"
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute d-flex flex-column text-justify align-items-start">
                  <Link className="text-danger py-2">
                      <h6 className="fw-bold mb-0">20% OFF</h6>
                    </Link>
                    <h5 className="text-black">WATCH SERIES</h5>
                    <h6>₹44,999</h6>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap position-relative justify-content-between">
                <div className="small-banner position-relaive p-1 pt-3">
                  <img
                    src="./images/catbanner-01.jpg"
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute d-flex flex-column text-justify align-items-start">
                    <Link className="text-danger py-2">
                      <h6 className="fw-bold mb-0">BEST SALE</h6>
                    </Link>
                    <h5 className="text-black">MACBOOK PRO 16</h5>
                    <h6>₹1,94,999</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3 ">
              <div className="d-flex flex-wrap position-relative justify-content-between">
                <div className="small-banner position-relaive p-1 pb-3">
                  <img
                    src="./images/catbanner-04.jpg"
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute d-flex flex-column text-justify align-items-start">
                  <Link className="text-danger py-2">
                      <h6 className="fw-bold mb-0">NEW ARRIVAL</h6>
                    </Link>
                    <h5 className="text-black">AIRPODS MAX</h5>
                    <h6>₹52,899</h6>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap position-relative justify-content-between">
                <div className="small-banner position-relaive p-1 pt-3">
                  <img
                    src="./images/catbanner-03.jpg"
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute d-flex flex-column text-justify align-items-start">
                  <Link className="text-danger py-2">
                      <h6 className="fw-bold mb-0">GENERATION 5</h6>
                    </Link>
                    <h5 className="text-black">IPAD PRO</h5>
                    <h6>₹81,990</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5 px-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex flex-column align-items-center">
                  <img src="./images/service-04.png" alt="services" />
                  <div className="d-flex flex-column align-items-center">
                    <p className="mb-0">Shop & Save</p>
                    <h6>AFFORDABLE PRICES</h6>
                  </div>                             
                </div>
                <div className="d-flex flex-column align-items-center ">
                  <img src="./images/service.png" alt="services" />
                  <div className="d-flex align-items-center flex-column">
                    <p className="mb-0">Orders Over ₹1000</p>
                    <h6>FREE SHIPPING</h6>
                  </div>
                </div>
                <div className="d-flex align-items-center flex-column">
                  <img src="./images/service-03.png" alt="services" />
                  <div className="d-flex align-items-center flex-column">
                    <p className="mb-0">Experts Available To Shop</p>
                    <h6>SUPPORT 24x7</h6>
                  </div>
                </div>
                <div className="d-flex align-items-center flex-column">
                  <img src="./images/service-05.png" alt="services" />
                  <div className="d-flex align-items-center flex-column">
                    <p className="mb-0">100% Protected Payment</p>
                    <h6>SECURE PAYMENTS</h6>
                  </div>
                </div>
                <div className="d-flex align-items-center flex-column">
                  <img src="./images/service-02.png" alt="services" />
                  <div className="d-flex align-items-center flex-column">
                    <p className="mb-0">Save Upto 15% Off</p>
                    <h6>DAILY OFFERS</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-3 py-5 px-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Android TVs</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="./images/tv.jpg" alt="" width={120} height={100} />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Mobiles</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="./images/mobile.jpg" alt=""  width={120} height={100} />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="./images/camera.jpg" alt=""  width={120} height={100} />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Headphones</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="./images/headphones.jpg" alt=""  width={120} height={100} />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Laptops</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="./images/laptop.jpg" alt="" width={120} height={100} />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="./images/gaming.jpg" alt=""  width={120} height={100} />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Speakers</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="./images/speakers.jpg" alt=""  width={120} height={100} />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="./images/watch.jpg" alt=""  width={120} height={100} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marquee-wrapper py-5 px-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
              <Marquee gradient={false} className="d-flex">
                <div className="mx-2 w-30">
                  <img width={90} height={70} src="./images/brand_01.png" alt="brand" />
                </div>
                <div className="mx-2 w-25">
                  <img width={90} height={70} src="./images/brand_02.png" alt="brand" />
                </div>
                <div className="mx-2 w-25">
                  <img width={90} height={70} src="./images/brand_03.png" alt="brand" />
                </div>
                <div className="mx-2 w-25">
                  <img width={90} height={70} src="./images/brand_04.png" alt="brand" />
                </div>
                <div className="mx-2 w-25">
                  <img width={90} height={70} src="./images/brand_05.png" alt="brand" />
                </div>
                <div className="mx-2 w-25">
                  <img width={90} height={70} src="./images/brand_06.png" alt="brand" />
                </div>
                <div className="mx-2 w-25">
                  <img width={90} height={70} src="./images/brand_07.png" alt="brand" />
                </div>
                <div className="mx-2 w-25">
                  <img width={90} height={70} src="./images/brand_08.png" alt="brand" />
                </div>
                <div className="mx-2 w-25">
                  <img width={90} height={70} src="./images/brand_09.png" alt="brand" />
                </div>
              </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper home-wrapper-2 py-5 px-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">FEATURED COLLECTION</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="blog-wrapper home-wrapper-2 py-5 px-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">LATEST BLOGS</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
