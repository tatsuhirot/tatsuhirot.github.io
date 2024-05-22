import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogIndex from './blog/index';
import BlogPost from './blog/[slug]';
import Header from './components/Header'; // 必要に応じてヘッダーやフッターを含めます
import Footer from './components/Footer';

const BlogLayout = () => {
  return (
    <div>
      <div className="content">
        <Routes>
          <Route path="/" element={<BlogIndex />} />
          <Route path="/:slug" element={<BlogPost />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default BlogLayout;
