import React, { useState } from 'react';

const Politics = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('api/posts');
                if (!response.ok) {
                    throw new Error('Error getting data from the API!');
                }
                const result = response.json();
                setPosts(result);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    const politicsPosts = posts.filter((post) => post.category === "politics")

    return(
        <div>
            <h1>Politics</h1>
            {politicsPosts.length > 0 ? (
                politicsPosts.map((post) => {
                    return (
                        <div className='post-card' key={post._id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <h6>{post.category}</h6>
                        </div>
                    )
                })
            ) : (
                <p>There are no posts for this category!</p>
            )}
            {}
        </div>
    )
}

export default Politics;