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
    }, [])

    return(
        <div>
            <h1>Sports placeholder</h1>
        </div>
    )
}

export default Sports;