import React, { useState } from 'react';

const Predators = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('api/posts');
                if (!response.ok) {
                    throw new Error("Error getting the posts from the API!");
                }
                const result = response.json();
                setPosts(result)
            } catch (error) {
                console.error(error)
            }
        }
    })

    const predatorPosts = posts.filter((post) => post.category === "predators");
    return(
        <div>
            <h1>Predators placeholder</h1>
            {pedatorsPost.length > 0 ? () : ()}
        </div>
    )
}

export default Predators;