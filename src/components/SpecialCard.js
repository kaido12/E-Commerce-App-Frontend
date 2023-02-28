import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const SpecialCard = () => {
  return (
    <div className='col-6'>
        <div className="special-product-card mb-4">
            <div className="d-flex justify-content-between">
                <div>
                    <img src="./images/bose.jpg" width={200} alt="specialproduct" />
                </div>
                <div className="special-product-content d-flex flex-column">
                    <h5 className="brand">Bose</h5>
                    <h6 className="title">
                        SoundLink Portable Smart Speaker
                    </h6>
                    <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        isHalf={true}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className="price">
                        <span className="red-400">₹32500</span> &nbsp; <strike>₹40000</strike>
                    </p>
                    <div className="discount-till d-flex align-items-center gap-10">
                        <p className='mb-0'>
                            <b>5 </b>days
                        </p>
                        <div className="d-flex gap-10">
                            <span className="badge rounded-circle p-2 bg-danger">1</span>:
                            <span className="badge rounded-circle p-2 bg-danger">1</span>:
                            <span className="badge rounded-circle p-2 bg-danger">1</span>
                        </div>
                    </div>
                    <div className='prod-count my-3'>
                        <p>Products: 5</p>
                        <div 
                            className="progress" 
                            role="progressbar" 
                            aria-label="Animated striped example" 
                            aria-valuenow="35" 
                            aria-valuemin="0" 
                            aria-valuemax="100"
                        >
                            <div 
                                className="progress-bar progress-bar-striped progress-bar-animated bg-success" 
                                style={{width: "35%"}}
                            >
                            35%
                            </div>
                        </div>
                    </div>                     
                    <Link className='button'>
                        <button type="button" className="btn btn-danger">
                            Add To Cart
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialCard;