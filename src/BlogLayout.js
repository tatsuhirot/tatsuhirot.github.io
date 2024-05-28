import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogIndex from './blog/index';
import BlogPost from './blog/[slug]';

const BlogLayout = ({ blogInfo, sharedData }) => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<BlogIndex blogInfo={blogInfo} sharedData={sharedData} />} />
        <Route path="/:slug" element={<BlogPost blogInfo={blogInfo} sharedData={sharedData} />} />
      </Routes>
    </div>
  );
};

export default BlogLayout;

