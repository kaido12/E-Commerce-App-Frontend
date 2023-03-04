import React from 'react'
import BreadCrumb from '../components/BreadCrumb'

const CompareProducts = () => {
  return (
    <>
        <BreadCrumb title="Compare Products" />
        <div className="compare-products-wrapper home-wrapper-2 py-5 px-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <img src="./images/cross.svg" alt="cross" className='cross position-absolute img-fluid' />
                            <div className="product-card-image d-flex justify-content-center ">
                                <img src="./images/tablet.jpg" height={200}  alt="tablet" />
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title">
                                    Samsung Galaxy Tab S6 Lite 5G 64GB ROM / 4GB RAM
                                </h5>
                                <h6 className='price'>₹12500</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CompareProducts