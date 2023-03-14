import React from 'react';
import { Link } from 'react-router-dom';
import blog_01 from "../images/blog_1.jpg";

const BlogCard = () => {
  return (    
    <div className="blog-card">
        <div className="card-image">
            <img src={blog_01} className='img-fluid w-100' alt="blog" />
        </div>
        <div className="blog-content">
            <p className="date">16 Jan, 2023</p>
            <h5 className="title fs-5">A beautiful sunday evening glimpse</h5>
            <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis culpa animi in magni.
            </p>
            <Link to="/blog/:id" className='button text-danger'>
                Read More
            </Link>
        </div>
    </div>
    
  )
}

export default BlogCard