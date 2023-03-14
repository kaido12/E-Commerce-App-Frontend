import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsLinkedin, BsInstagram } from "react-icons/bs";
import paper from "../images/news-letter.png";

const Footer = () => {
  return (
    <>
      <footer className="footer-first py-3 px-5">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top d-flex gap-30 align-items-center">
                <img
                  src={paper}
                  width="30"
                  height="30"
                  alt="newsletter"
                />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Enter Your Email..."
                  aria-label="Enter Your Email..."
                  aria-describedby="basic-addon2"
                />
                <span
                  className="input-group-text p-2 text-white"
                  id="basic-addon2"
                >
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-second py-4 px-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white">Contact Us</h4>
              <div className="">
                <address className="text-white fs-6">
                  T-62, Bandhan Palace, <br />
                  Jampur, Noida,
                  <br />
                  PinCode: 110162
                </address>
                <a
                  href="tel: +91-8081828384"
                  className="mt-4 d-block mb-2 text-white"
                >
                  +91-8081828384
                </a>
                <a
                  href="mail to: jirachi@hotmail.com"
                  className="mt-4 d-block mb-2 text-white"
                >
                  jirachi@hotmail.com
                </a>
                <div className="social_media_icons d-flex align-items-center gap-30">
                  <a className="yellow-300">
                    <BsGithub className="fs-5" />
                  </a>
                  <a className="yellow-300">
                    <BsYoutube className="fs-5" />
                  </a>
                  <a className="yellow-300">
                    <BsInstagram className="fs-5" />
                  </a>
                  <a className="yellow-300">
                    <BsLinkedin className="fs-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watches</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/blog" className="text-white py-2 mb-1">Blogs</Link>
                <Link to="/privacy-policy" className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">Refund Policy</Link>
                <Link to="/delivery-policy" className="text-white py-2 mb-1">Delivery Policy</Link>
                <Link to="/terms-and-conditions" className="text-white py-2 mb-1">
                  Terms and Conditions
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">FAQ</Link>
                <Link to="/contact" className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-third py-3 px-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} |{"        "}Xnova | All Rigts
                Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
