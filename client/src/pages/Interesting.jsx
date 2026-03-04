import React, { useState, useEffect } from 'react';

const Interesting = () => {

    const [posts,setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('api/posts');
                if (!response.ok) {
                    throw new Error('Error getting data from the API');
                }
                const result = await response.json();
                setPosts(result);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    const interestingPosts = posts.filter((post) => post.category === "interesting");

    return(
        <div>
            <h1>Interesting Posts</h1>
            {interestingPosts.length > 0 ? (
                interestingPosts.map((post) => {
                    return (
                        <div className="card-container">
                        <div className='post-card' key={post._id}>
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

export default Interesting;