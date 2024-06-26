import React from 'react';
import { Link } from 'react-router-dom';
// import './index.scss';  // Adjust the path based on your project structure
import "../App.scss";
const BlogIndex = ({ blogInfo=[], sharedData=[] }) => {
  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <div className="col-md-12 text-center mb-4">
          <h1 className="blog-title">
            <span>Blog</span>
          </h1>         
        </div>
        <div className="row center mx-auto mb-5">
          <div className="col-md-8 center">
            <ul className="blog-list">
              {blogInfo.map(post => (
                <li className="blog-list-item" key={post.slug}>
                  <Link to={`/blog/${post.slug}`} className="blog-link">
                    <div className="blog-post-preview">
                      <img src={post.featuredImage} alt={post.title} className="blog-post-image" />
                      <div className="blog-post-info">
                        <h2>{post.title}</h2>
                        <p className="blog-post-date">Posted Date: {post.date}</p>
                        <p className="blog-post-category">Category: {post.category}</p>
                        <p className="blog-post-excerpt">{post.excerpt}</p>
                        
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogIndex;
