import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import wish  from "../images/wish.svg";
import product01  from "../images/product_01.png";
import product02 from "../images/product_02.png";
import view from "../images/view.svg";
import add_cart from "../images/add-cart.svg";
import prodcompare from "../images/prodcompare.svg";

const ProductCard = ({grid}) => {

  let location = useLocation();


  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <>
      <div className={`${location.pathname === "/store" ? `col-${grid}`: "col-2"}`}>        
        <Link to='/store/:id' className="product-card position-relative">
              <div className="wishlist-icon position-absolute">
                <button className='border-0 bg-transparent'>
                  <img src={wish} alt="wishlist" />
                </button>
              </div>
              <div className="product-image d-flex align-items-center justify-content-center">
                <img src={product01} alt="product" />
                <img src={product02} alt="product" />
              </div>
              <div className="product-details">
                <h6 className="brand">Sony</h6>              
                <h5 className="product-title">Buy 3 & Get 15% Off</h5>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  // value="3"
                  isHalf={true}
                  //edit={false}
                  activeColor="#ffd700"
                />
                <p className={`description ${(grid === 12) || (grid === 6)? "d-block" : "d-none"}`}>
                  Oit omnis ducimus repellat earum possimus culpa fugit laudantium esse voluptat.
                  Natus explicabo corporis quaerat ut odit saepe dignissimos, earum possimus et.
                  Quia non adipisci voluptates architecto.
                </p> 
                <p className='price'>₹5000</p>
              </div>
              <div className="side-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                  <button className='border-0 bg-transparent'>
                    <img src={view} alt="view" />
                  </button>
                  <button className='border-0 bg-transparent'>
                    <img src={add_cart} alt="addcart" />
                  </button>
                  <button className='border-0 bg-transparent'>
                    <img src={prodcompare} alt="product-compare" />
                  </button>
                </div>
              </div>
        </Link>
      </div>
    </>
  )
}

export default ProductCard;