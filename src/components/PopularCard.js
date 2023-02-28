import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const ProductCard = () => {

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className='col-3'>
        <div className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
              <Link>
                <img src="./images/wish.svg" alt="wishlist" />
              </Link>
            </div>
            <div className="product-image d-flex align-items-center justify-content-center">
              <img src="./images/product_01.png" height={110} alt="product" />
              <img src="./images/product_02.png" height={110} alt="product" />
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
              <p className='price'>₹5000</p>
            </div>
            <div className="side-bar position-absolute">
              <div className="d-flex flex-column gap-15">
                <Link>
                  <img src="./images/view.svg" alt="view" />
                </Link>
                <Link>
                  <img src="./images/add-cart.svg" alt="addcart" />
                </Link>
                <Link>
                  <img src="./images/prodcompare.svg" alt="view" />
                </Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard;