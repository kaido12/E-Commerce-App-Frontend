import React from 'react';
import ReactStars from "react-rating-stars-component";

const SpecialCard = () => {
  return (
    <div className='col-4'>
        <div className="special-product-card">
            <div className="d-flex justify-content-between">
                <div>
                    <img src="./images/bose.jpg" alt="specailproduct" />
                </div>
                <div className="special-product-content">
                    <h5 className="brand">Bose</h5>
                    <h6 className="title">
                        SoundLink Portable Smart Speaker
                    </h6>
                    <ReactStars
                        count={5}
                        size={24}
                        value="4"
                        isHalf={true}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className="price">
                        <span className="red-400">₹32500</span> <strike>₹40000</strike>
                    </p> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialCard;