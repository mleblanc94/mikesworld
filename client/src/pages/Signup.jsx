import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [uiError, setUiError] = useState('');
    const [loading, setLoading] = useState(false);


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormState((prev) => ({...prev, [name]: value}))
    }

    const canSubmit = formState.username.trim() && formState.email.trim() && formState.password.trim();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUiError('');

        const username = formState.username.trim();
        const email = formState.email.trim();
        const password = formState.password.trim();

        if (!username || !email || !password) {
            setUiError("Please fill out all fields.");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await res.json().catch(() => ({}));

            if (!res.ok) {
                throw new Error(data.message || "Signup failed.");
            }

            localStorage.setItem("token", data.token);
            navigate("/home", { replace: true });
        } catch (err) {
            setUiError(err.message || "Signup failed.")
        } finally {
            setLoading(false);
        }
    };

    return(
        <div className='login-page'>
            <form onSubmit={handleSubmit}>
                <h1>Create Account</h1>
            <div className="signup-container">
                <h2>Email:</h2>
            <input type="text" name='email' id='email' onChange={handleChange} value={formState.email}/>
            <h2>Username:</h2>
            <input type="text" name='username' id='username' onChange={handleChange} value={formState.username}/>
            <h2>Password:</h2>
            <input type="password" name="password" id="password" onChange={handleChange}  value={formState.password} required/>
            <div className='buttons-div'>
                <button type='submit' disabled={!canSubmit || loading}>
                    {loading ? "Creating..." : "Sign up"}
                    </button>
                <button type="button" onClick={() => navigate("/")}>Already have an account?</button>
            </div>
            </div>
            </form>
        </div>
    )
}

export default Signup;