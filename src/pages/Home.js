import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProdBlock from "../components/ProdBlock";
import PopularCard from "../components/PopularCard";
import SpecialCard from "../components/SpecialCard";
import services from "../utils/Data";
import Container from "../components/Container";
import main_banner  from "../images/banner.jpg";
import side_banner02  from "../images/catbanner-02.jpg";
import side_banner01  from "../images/catbanner-01.jpg";
import side_banner04  from "../images/catbanner-04.jpg";
import side_banner03  from "../images/catbanner-03.jpg";
import tv  from "../images/tv.jpg";
import mobile  from "../images/mobile.jpg";
import camera  from "../images/camera.jpg";
import headphone  from "../images/headphones.jpg";
import laptop  from "../images/laptop.jpg";
import gaming  from "../images/gaming.jpg";
import speaker  from "../images/speakers.jpg";
import watch  from "../images/watch.jpg";
import apple_series_8 from "../images/apple-series-8.jpg";
import apple_iphone_14 from "../images/apple-iphone-14.jpg";
import apple_homepod_mini from "../images/apple-homepod-mini.jpg";
import apple_macbook_pro from "../images/apple-macbook-pro.jpg";
import brand01 from "../images/brand_01.png"
import brand02 from "../images/brand_02.png"
import brand03 from "../images/brand_03.png"
import brand04 from "../images/brand_04.png"
import brand05 from "../images/brand_05.png"
import brand06 from "../images/brand_06.png"
import brand07 from "../images/brand_07.png"
import brand08 from "../images/brand_08.png"
import brand09 from "../images/brand_09.png"


const Home = () => {
  return (
    <>
      <Container classlabel="home-wrapper-1 py-5 px-5">
        <div className="row">
          <div className="col-6 position-relative">
            <div className="banner p-1 object-fit-contain">
              <img
                src={main_banner}
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
            <div className="d-flex flex-column position-relative justify-content-between">
              <div className="small-banner position-relaive p-1 pb-3">
                <img
                  src={side_banner02}
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
              <div className="small-banner position-relaive p-1 pb-3">
                <img
                  src={side_banner01}
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
                  src={side_banner04}
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
              <div className="small-banner position-relaive p-1 pb-3">
                <img
                  src={side_banner03}
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
      </Container>

      <Container classlabel="home-wrapper-2 py-5 px-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div
                    className="d-flex flex-column align-items-center"
                    key={j}
                  >
                    <img src={i.image} alt="services" />
                    <div className="d-flex flex-column align-items-center">
                      <p className="mb-0">{i.tagline}</p>
                      <h6>{i.title}</h6>
                    </div>
                  </div>
                );
              })}
              {/* <div className="d-flex flex-column align-items-center">
                  <img src="./images/service-04.png" alt="services" />
                  <div className="d-flex flex-column align-items-center">
                    <p className="mb-0">Shop & Save</p>
                    <h6>AFFORDABLE PRICES</h6>
                  </div>                             
                </div> */}
            </div>
          </div>
        </div>
      </Container>

      <Container classlabel="home-wrapper-3 py-5 px-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex align-items-center">
                <div>
                  <h6>Android TVs</h6>
                  <p>10 Items</p>
                </div>
                <img src={tv} alt="" width={120} height={100} />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Mobiles</h6>
                  <p>10 Items</p>
                </div>
                <img
                  src={mobile}
                  alt=""
                  width={120}
                  height={100}
                />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img
                  src={camera}
                  alt=""
                  width={120}
                  height={100}
                />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Headphones</h6>
                  <p>10 Items</p>
                </div>
                <img
                  src={headphone}
                  alt=""
                  width={120}
                  height={100}
                />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Laptops</h6>
                  <p>10 Items</p>
                </div>
                <img
                  src={laptop}
                  alt=""
                  width={120}
                  height={100}
                />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img
                  src={gaming}
                  alt=""
                  width={120}
                  height={100}
                />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Speakers</h6>
                  <p>10 Items</p>
                </div>
                <img
                  src={speaker}
                  alt=""
                  width={120}
                  height={100}
                />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src={watch} alt="" width={120} height={100} />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container classlabel="products-wrapper home-wrapper-2 py-5 px-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">FEATURED COLLECTION</h3>
          </div>
          <ProdBlock />
          <ProdBlock />
          <ProdBlock />
          <ProdBlock />
          <ProdBlock />
          <ProdBlock />
        </div>
      </Container>

      <Container classlabel="special-wrapper home-wrapper-3 py-5 px-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialCard />
          <SpecialCard />
          <SpecialCard />
          <SpecialCard />
        </div>
      </Container>

      <Container classlabel="smart-wrapper home-wrapper-2 py-5 px-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Apple Delights</h3>
          </div>
          <div className="col-3">
            <div className="smart-card position-relative">
              <img
                src={apple_series_8}
                className="img-fluid"
                width={300}
                alt="smart"
              />
              <div className="smart-content position-absolute">
                <h5>Water Resistant</h5>
                <h6>Series 8</h6>
                <p>₹49999</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="smart-card position-relative">
              <img
                src={apple_iphone_14}
                className="img-fluid"
                width={300}
                alt="smart"
              />
              <div className="smart-content position-absolute">
                <h5 className="text-dark">AI Camera</h5>
                <h6 className="text-dark">Iphone 14 </h6>
                <p className="text-dark">₹109999</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="smart-card position-relative">
              <img
                src={apple_homepod_mini}
                className="img-fluid"
                width={300}
                alt="smart"
              />
              <div className="smart-content position-absolute">
                <h5>Dolby Atmos</h5>
                <h6>Homepod Mini</h6>
                <p>₹38999</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="smart-card position-relative">
              <img
                src={apple_macbook_pro}
                className="img-fluid"
                width={300}
                alt="smart"
              />
              <div className="smart-content position-absolute">
                <h5 className="text-dark">Powerful Processor</h5>
                <h6 className="text-dark">Macbook Pro</h6>
                <p className="text-dark">₹159999</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container classlabel="marquee-wrapper py-5 px-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee gradient={false} className="d-flex">
                <div className="mx-3 w-30">
                  <img height={40} src={brand01} alt="brand" />
                </div>
                <div className="mx-3 w-25">
                  <img height={90} src={brand02} alt="brand" />
                </div>
                <div className="mx-3 w-25">
                  <img height={90} src={brand03} alt="brand" />
                </div>
                <div className="mx-3 w-25">
                  <img height={60} src={brand04} alt="brand" />
                </div>
                <div className="mx-3 w-25">
                  <img height={60} src={brand05} alt="brand" />
                </div>
                <div className="mx-3 w-25">
                  <img height={30} src={brand06} alt="brand" />
                </div>
                <div className="mx-3 w-25">
                  <img height={90} src={brand07} alt="brand" />
                </div>
                <div className="mx-3 w-25">
                  <img height={60} src={brand08} alt="brand" />
                </div>
                <div className="mx-3 w-25">
                  <img height={80} src={brand09} alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container classlabel="popular-wrapper home-wrapper-3 py-5 px-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Popular Products</h3>
          </div>
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
        </div>
      </Container>

      <Container classlabel="blog-wrapper home-wrapper-2 py-5 px-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">LATEST BLOGS</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
