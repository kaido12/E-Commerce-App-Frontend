import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Colour from "../components/Colour";

const Store = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <BreadCrumb title="Store" />
      <div className="store-wrapper home-wrapper-3 py-5 px-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" />
                      <label className="form-check-label" htmlFor="">
                        In Stock {1}
                      </label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" />
                      <label className="form-check-label" htmlFor="">
                        Out of Stock {0}
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control pb-1"
                        id="floatingInput1"
                        placeholder="From"
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control pb-1"
                        id="floatingInput2"
                        placeholder="To"
                      />
                      <label htmlFor="floatingInput">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colour</h5>
                  <div className="d-flex flex-wrap">
                    <Colour />
                    <Colour />
                    <Colour />
                    <Colour />                    
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="size-1"
                      />
                      <label className="form-check-label" htmlFor="size-1">
                        S {2}
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="size-2"
                      />
                      <label className="form-check-label" htmlFor="size-2">
                        M {3}
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="size-3"
                      />
                      <label className="form-check-label" htmlFor="size-3">
                        L {4}
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="size-4"
                      />
                      <label className="form-check-label" htmlFor="size-4">
                        XL {5}
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="size-5"
                      />
                      <label className="form-check-label" htmlFor="size-5">
                        XXL {6}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tag d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Headphone
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Speaker
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Mobile
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Watch
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Bike
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-product d-flex">
                    <div className="image-width-1">
                      <img
                        src="images/watch.jpg"
                        height={30}
                        className="img-fluid px-2"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <p className="fw-bold">Fastrack Watch</p>
                      <ReactStars
                        count={5}
                        size={20}
                        value={3}
                        // isHalf={true}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p>₹ 7999</p>
                    </div>
                  </div>
                  <div className="random-product d-flex">
                    <div className="image-width-1">
                      <img
                        src="images/gaming.jpg"
                        height={30}
                        className="img-fluid px-2"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <p className="fw-bold">PlayStation 4</p>
                      <ReactStars
                        count={5}
                        size={20}
                        value={4}
                        isHalf={true}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p>₹ 26799</p>
                    </div>
                  </div>
                  <div className="random-product d-flex">
                    <div className="image-width-1">
                      <img
                        src="images/bike.jpg"
                        height={50}
                        className="img-fluid px-2"
                        alt="bike"
                      />
                    </div>
                    <div className="w-50">
                      <p className="fw-bold">HRX Xtrm CT 500</p>
                      <ReactStars
                        count={5}
                        size={20}
                        value={4}
                        // isHalf={true}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p>₹ 18599</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center ">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{ width: "100px" }}>
                      Sort by :
                    </p>
                    <select defaultValue="top-sold" className="form-control form-select" id="">
                      <option value="manual">Featured</option>
                      <option value="top-sold">
                        Top Selling
                      </option>
                      <option value="price-decreasing">
                        Price High to Low
                      </option>
                      <option value="price-increasing">
                        Price Low to High
                      </option>
                      <option value="manufactured-new">Date New to Old</option>
                      <option value="manufactured-old">Date Old to New</option>
                      <option value="alphabetically">A-Z</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10 ">
                    <p className="totalproducts mb-0 me-2">30 Products</p>
                    <div className="d-flex gap-15 align-items-center grid-img">
                      <img
                        onClick={() => setGrid(12)}
                        src="./images/gr.svg"
                        alt=""
                        className="d-block img-fluid"
                      />
                      <img
                        onClick={() => setGrid(6)}
                        src="./images/gr2.svg"
                        alt=""
                        className="d-block img-fluid"
                      />
                      <img
                        onClick={() => setGrid(4)}
                        src="./images/gr3.svg"
                        alt=""
                        className="d-block img-fluid"
                      />
                      <img
                        onClick={() => setGrid(3)}
                        src="./images/gr4.svg"
                        alt=""
                        className="d-block img-fluid me-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex flex-wrap">
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
