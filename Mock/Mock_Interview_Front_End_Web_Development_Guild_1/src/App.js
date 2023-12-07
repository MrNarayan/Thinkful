import React, { useEffect, useState } from "react";
import PostDetail from "./PostDetail";
import PostList from "./PostList";

function App() {
    const [posts, setPosts] = useState([]);
    const [currentPost, setCurrentPost] = useState({});

    useEffect(() => {
        async function loadPosts() {

            fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
                .then((response) => response.json())
                .then(setPosts)
                .catch((error) => {
                    console.log(error)
                });
        }

        loadPosts();
    }, []);

    /* Hint: Use the map() method to loop through the posts array, returning a PostDetail component for each post */
    return (
        <div className="App">
            <div className="left column">
                <PostList posts={posts} setCurrentPost={setCurrentPost} />
            </div>
            <div className="right column">
                <PostDetail post={currentPost}/>
            </div>
        </div>
    );
}

export default App;
