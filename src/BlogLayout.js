import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogIndex from './blog/index';
import BlogPost from './blog/[slug]';

const BlogLayout = () => {
  return (
    <div>
      <div className="content">
        <Routes>
          <Route path="/" element={<BlogIndex />} />
          <Route path="/:slug" element={<BlogPost />} />
        </Routes>
      </div>
    </div>
  );
};

export default BlogLayout;
