import React, { useState, useEffect } from 'react';

const Sports = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/posts")
                if (!response.ok) {
                    throw new Error("Could not get the posts from the API!");
                }
                const result = await response.json();
                console.log(result);
                setPosts(result);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    const sportsPosts = posts.filter((post) => post.category === "sports");

    return(
        <div>
            <h1>Sports placeholder</h1>
            {sportsPosts.length > 0 ? (
                sportsPosts.map((post) => {
                    return (
                        <div className='post-cards' key={post._id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <h6>{post.category}</h6>
                        </div>
                    )
                })
            ) : (
                <p>There are no posts for this category!</p>
            )}
        </div>
    )
}

export default Sports;