import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { IoHomeOutline, IoMailOutline, IoCallOutline, IoInformationSharp } from "react-icons/io5";


const Contact = () => {
  return (
    <>
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper py-5 px-5 home-wrapper-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18671.635865381366!2d78.02050811638078!3d30.321190646116346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1677862974679!5m2!1sen!2sin"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-tiltle">Contact</h3>
                  <form className="d-flex flex-column gap-15">
                    <div className="">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="">
                      <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="">
                      <input type="tel" className="form-control" placeholder="Mobile Number"/>
                    </div>
                    <div className="">
                      <textarea
                        className="w-100 form-control"
                        name=""
                        id=""
                        cols="30"
                        rows="4"
                        placeholder="Comment"
                      ></textarea>
                    </div>
                    <div>
                      <button className="btn btn-danger rounded-5 border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title">Reach Out</h3>
                  <div>
                    <ul className="ps-0 list-unstyled">
                      <li className="mb-3 contact-li d-flex gap-15 align-items-center">
                        <IoHomeOutline  className="fs-5"/>
                        <address className="mb-0 ">
                          T-62, Bandhan Palace,
                          Jampur, Noida,                        
                          110162
                        </address>
                      </li>
                      <li className="mb-3 contact-li d-flex gap-15 align-items-center">
                        <IoMailOutline  className="fs-5"/>
                        <a
                          href="mail to: jirachi@hotmail.com"
                        >
                          jirachi@hotmail.com
                        </a>
                      </li>
                      <li className="mb-3 contact-li d-flex gap-15 align-items-center">
                        <IoCallOutline  className="fs-5"/>
                        <a
                          href="tel: +91-8081828384" 
                        >
                          +91-8081828384
                        </a>
                      </li>
                      <li className="mb-3 contact-li d-flex gap-15 align-items-center">
                        <IoInformationSharp  className="fs-5"/>
                        <p className="mb-0">Monday - Friday : 10 AM - 7 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
