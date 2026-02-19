import React, { useState, useEffect } from 'react';

const Predators = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('api/posts');
                if (!response.ok) {
                    throw new Error("Error getting the posts from the API!");
                }
                const result = await response.json();
                setPosts(result)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData();
    }, [])

    const predatorPosts = posts.filter((post) => post.category === "predators");
    return(
        <div>
            <h1>Predators</h1>
            {predatorPosts.length > 0 ? (
                predatorPosts.map((post) => {
                    return (
                        <div className="card-container">
                        <div className='post-cards' key={post._id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        </div>
                        </div>
                    )
                })
            ) : (
                <p>There are no posts for this category!</p>
            )}
        </div>
    )
}

export default Predators;