import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.scss';  // Adjust the path based on your project structure

const BlogPost = ({ blogInfo=[], sharedData=[] }) => {
  let { slug } = useParams();

  const post = blogInfo.find(p => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <div className="blog-post text-center mb-4">
          <h1>{post.title}</h1>
          <p>{post.date}</p>
          <p>{post.category}</p>
          {post.featuredImage && <img src={post.featuredImage} alt={post.title} />}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
