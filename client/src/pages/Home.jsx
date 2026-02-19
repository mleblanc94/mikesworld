import React from 'react';
import './Home.css'
import { useState, useEffect } from 'react';

const Home = () => {

    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useState('');

      useEffect(() => {
                    const fetchData = async () => {
                        try {
                            const response = await fetch("/api/posts");
                            if (!response.ok) {
                                throw new Error('Error! Nothing returned from the API');
                            }
                            const result = await response.json();
                            console.log(result);
                            setPosts(result);
                        } catch (error) {
                            console.log("Issue pulling in posts")
                        }
                    }
                    fetchData();
                }, [])

    const handleQueryChange = (e) => {
        setQuery(e.target.value)
    }

    const filtered = posts.filter((item) => {
    return item.title.toLowerCase().includes(query.toLowerCase());
})

    return(
        <div>
            <h1 className="title">Mike's World!</h1>
            <h3>Latest News</h3>
            <input type="text" id="search-title" value={query} placeholder="Search Title..." onChange={handleQueryChange}/>
            { filtered.length > 0 ? (
              filtered.map((post) => {
                return (
                    <div className="card-container">
                    <div className='post-cards' key={post._id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <h6>Category: {post.category}</h6>
                    </div>
                    </div>
                )}
              )
            ) : (
                <p>There are no posts!</p>
            )}
        </div>
    )
}

export default Home;