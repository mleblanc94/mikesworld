import React, { useEffect } from 'react';

const PublicFreakouts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await fetch('/api/posts');
            if (!response.ok) {
                throw new Error('Error pulling from the API');
            }
            const result = response.json();
            setPosts(result);
            } catch (error) {
                console.error(error)
            }
        }
        fetchData();
    }, [])


    const publicFreakoutCategory = posts.filter((post) => post.category === "public-freakouts")

    return(
        <div>
            <h1>Public Freakouts placeholder</h1>
            {publicFreakoutCategory.length > 0 ? (
                publicFreakoutCategory.map((post) => {
                    return (
                        <div className='post-cards' key={post._id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <h6>{post.category}</h6>
                        </div>
                    )
                })
            ) : (
                <p>No posts for this category!</p>
            )}
        </div>
    )
}

export default PublicFreakouts;