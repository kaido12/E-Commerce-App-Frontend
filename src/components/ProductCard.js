import React from 'react'

const ProductCard = () => {
  return (
    <div className='col-2'>
        <div className="product-card">
            <div className="product-image d-flex align-items-center justify-content-center">
              <img src="./images/product_01.png" className='' width={65} height={120} alt="product" />
            </div>
            <div className="product-details">
              <h6 className="brand">Sony</h6>
              <h5 className="product-title">Buy 3 & Get 15% Off</h5>
              <p className='price'>₹5000</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard;