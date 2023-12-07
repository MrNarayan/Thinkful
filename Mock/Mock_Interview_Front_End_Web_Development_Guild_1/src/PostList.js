import React from "react";

function PostList({ posts, setCurrentPost }) {
  return (
    <ul className="post-list">
      {posts.map((post) => (
        <li key={post.title}>
          <h1>{post.title}</h1>
          <button type="button" onClick={() => setCurrentPost(post)}>
            {post.body}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default PostList;