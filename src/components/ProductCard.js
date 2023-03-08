import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

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
                <Link>
                  <img src="./images/wish.svg" alt="wishlist" />
                </Link>
              </div>
              <div className="product-image d-flex align-items-center justify-content-center">
                <img src="./images/product_01.png" alt="product" />
                <img src="./images/product_02.png" alt="product" />
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
        </Link>
      </div>
    </>
  )
}

export default ProductCard;