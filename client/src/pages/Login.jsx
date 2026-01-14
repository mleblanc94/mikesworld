import React from 'react';
import './Login.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [showPw, setShowPw] = useState(false);
    const [uiError, setUiError] = useState('');
    const [loading, setLoading] = useState(false);

    const [formState, setFormState] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prev) => ({...prev, [name]: value }));
    }

    const canSubmit = formState.email.trim() && formState.password.trim();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUiError('');

        const email = formState.email.trim();
        const password = formState.password;

        if (!email || !password) {
            setUiError("Please enter both email and password.");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json().catch(() => ({}));

            if (!res.ok) {
                throw new Error(data.message || "Invalid email or password.");
            }

            localStorage.setItem("token", data.token);

            localStorage.setItem("user", JSON.stringify(data.user));

            navigate("/", { replace: true });
        } catch (err) {
            setUiError(err.message || "Login failed. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return(
        <div className='login-page'>
            <h1>Welcome to Mike's World!</h1>
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
            <div className="login-container">
            <h2>Username/Email:</h2>
            <input className='login-input' type="email" name='email' id='email' value={formState.email} placeholder='Username' onChange={handleChange} required/>
            <h2>Password</h2>
            <input className='login-input' type="text" name="password" id='password' value={formState.password} onChange={handleChange} placeholder='*******' required/>
            <div className='buttons-div'>
                <button>Login</button>
            </div>
            <h5>Forget Password? Click <a>here</a></h5>
            </div>
            </form>
        </div>
    )
}

export default Login;