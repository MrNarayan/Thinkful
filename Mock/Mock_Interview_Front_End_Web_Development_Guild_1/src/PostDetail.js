import React, { useEffect, useState } from "react";

function PostDetail({ post = {} }) {
    // Your solution here
    const [comments, setComments] = useState([]);
    useEffect(() => {
        async function loadComments(postId) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                .then((response) => response.json())
                .then(setComments)
                .catch((error) => {
                    console.log(error)
                });
        }

        if (post.id) {
            loadComments(post.id);
        }
    }, [post]);

    if (post.id) {
        return (
            <div className="albums">
                <h2>Comments</h2>
                <ul className="comment-list">
                    {comments.map((comment) => (
                        <li key={comment.name}>
                            {comment.email} - {comment.body}
                        </li>
                    ))}
                </ul>
            </div>
        );
    } else {

        return <p>No posts to display</p>;
    }
}

export default PostDetail;
