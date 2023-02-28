import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = ({title}) => {
  return (
    <div className='breadcrumb mb-0 py-5 px-5'>
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <p className='text-start mb-0'>
                        <Link to="/" className='text-dark'>Home </Link>
                        {" "} / {title}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BreadCrumb