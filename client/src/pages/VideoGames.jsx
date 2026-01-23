import React, {useEffect} from 'react';

const VideoGames = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch("/api/");
                if (!response.ok) {
                    throw new Error('Error pulling from API!')
                }
                const result = response.JSON();
                setPosts(result);
            } catch (error) {
                console.error(error);
            }
        }
        getData();
    }, []);

    const videoGamesPosts = posts.filter((post) => post.category === "video-games")

    return(
        <div>
            <h1>Video Games placeholder</h1>
            {videoGamesPosts.length > 0 ? (
                videoGamesPosts.map((post) => {
                    return (
                        <div className="post-cards" key={post._id}>
                            <h1>{post.title}</h1>
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

export default VideoGames;