import React from 'react';
import { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';


const CreatePost = () => {

    const navigate = useNavigate();
    const [formState, setFormState] = useState({ title: '', body: '', category: '' });
    const [uiError, setUiError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prev) => ({...prev, [name]: value }))
    }

    const canSubmit = formState.title.trim() && formState.body.trim() && formState.category.trim();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUiError('');

        const title = formState.title.trim();
        const body = formState.body.trim();
        const category = formState.category.trim();

        if (!title || !body || !category) {
            setUiError("Please fill out all necessary fields!");
            return
        }

        setLoading(true);

        try {
            const token = localStorage.getItem("token");

            const res = await fetch("/api/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json",
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                 },
                body: JSON.stringify({ title, body, category }),
            })

            const data = await res.json().catch(() => ({}));

            if (!res.ok) {
                throw new Error(data.message || "Creating post Failed!");
            }

            navigate("/", { replace: true })
        } catch (err) {
            setUiError(err.message || "Posting new post failed.");
        } finally {
            setLoading(false);
        }

    }

    return(
        <div className='login-page'>
            <h1>Create a Post!</h1>
            <form onSubmit={handleSubmit}>
            <div className="create-post">
                <h3>Post Title:</h3>
                <input name='title' id='title' onChange={handleChange} value={formState.title}></input>
                <h3>Post Body:</h3>
                <textarea name="body" id="body" cols="50" rows="10" onChange={handleChange} value={formState.body}></textarea>
                <h3>Post Category:</h3>
                <select name="category" id="category" onChange={handleChange} value={formState.category}>
                    <option value=''>Select one...</option>
                    <option value="predators">Predators</option>
                    <option value="sports">Sports</option>
                    <option value="politics">Politics</option>
                    <option value="public-freakouts">Public Freakouts</option>
                    <option value="interesting">Interesting</option>
                    <option value="video-games">Video Games</option>
                    <option value="food">Food</option>
                </select>

                {uiError && <p>{uiError}</p>}

                <div className="buttons-div"></div>
                <button type="submit" disabled={!canSubmit || loading}>
                    {loading ? "Logging in..." : "Submit"}
                    </button>
            </div>
            </form>
        </div>
    )
}

export default CreatePost;