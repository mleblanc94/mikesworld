import React from 'react';
import './Login.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [showPw, setShowPw] = useState(false);

    const [formState, setFormState] = useState({ email: '', password: '' });
    

    return(
        <div className='login-page'>
            <h1>Welcome to Mike's World!</h1>
            <div className="login-container">
            <h2>Username/Email:</h2>
            
            <input type="email" name='email-input' id='email' value={formState.email}/>
            <h2>Password</h2>
            <input type="text" name="password-input" id='password' value={formState.password}/>
            <div className='buttons-div'>
                <button>Login</button>
            </div>
            <h5>Forget Password? Click <a>here</a></h5>
            </div>
        </div>
    )
}

export default Login;