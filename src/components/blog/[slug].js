import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  let { slug } = useParams();

  // サンプルブログデータ
  const blogPosts = {
    "first-post": {
      title: "First Blog Post",
      content: "This is the content of the first blog post."
    },
    "second-post": {
      title: "Second Blog Post",
      content: "This is the content of the second blog post."
    }
    // 他のブログ投稿もここに追加できます
  };

  const post = blogPosts[slug];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
