import React, { useState, useEffect } from 'react';

const Food = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await fetch('api/posts');
            if (!response.ok) {
                throw new Error('Cannot get data from API')
            }
            const result = await response.json();
            setPosts(result);
            } catch (error) {
                console.error(error)
            }
        }
        fetchData();
    }, []);

    const foodPosts = posts.filter((post) => post.category === "food");

    return(
        <div>
            <h1>Food</h1>
            {foodPosts.length > 0 ? (
                foodPosts.map((post) => {
                    return (
                        <div className="card-container">
                        <div className="post-card" key={post._id}>
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

export default Food;