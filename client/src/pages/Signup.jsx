import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormState((prev) => ({...prev, [name]: value}))
    }

    const handleSubmit = async (e) => {

    }

    return(
        <div className='login-page'>
            <form onClick={handleSubmit}>
            <div className="signup-container">
                <h2>Email:</h2>
            <input type="text" name='email' id='email' onChange={handleChange} value={formState.email}/>
            <h2>Username:</h2>
            <input type="text" name='username' id='username' onChange={handleChange} value={formState.username}/>
            <h2>Password:</h2>
            <input type="text" name="password" id="password" onChange={handleChange}  value={formState.password} required/>
            <div className='buttons-div'>
                <button>Sign up</button>
                <button>Login</button>
            </div>
            </div>
            </form>
        </div>
    )
}

export default Signup;