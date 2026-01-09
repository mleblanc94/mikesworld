import React from 'react';
import './Login.css';

const Login = () => {
    return(
        <div className='login-page'>
            <h1>Welcome to Mike's World!</h1>
            <div className="login-container">
            <h2>Username/Email:</h2>
            <input type="text" name='email-input'/>
            <h2>Password</h2>
            <input type="text" name="password-input" />
            </div>
        </div>
    )
}

export default Login;