import React from 'react';
import { Link } from 'react-router-dom';

const BlogIndex = () => {
  return (
    <section id="blog">
      <div className="col-md-12">
        <h1 style={{ color: "black" }}>
          <span>Blog</span>
        </h1>
        <div className="row center mx-auto mb-5">
          <div className="col-md-8 center">
            <ul>
              <li><Link to="/blog/first-post">First Blog Post</Link></li>
              <li><Link to="/blog/second-post">Second Blog Post</Link></li>
              {/* 他のブログ投稿へのリンクもここに追加 */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogIndex;

