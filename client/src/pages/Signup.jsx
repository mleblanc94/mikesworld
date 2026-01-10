import React from 'react';

const Signup = () => {
    return(
        <div className='login-page'>
            <div className="signup-container">
                <h2>Username/Email:</h2>
            <input type="text" name='email-input'/>
            <h2>Password</h2>
            <input type="text" name="password-input" />
            <div className='buttons-div'>
                <button>Sign up</button>
            </div>
            </div>
        </div>
    )
}

export default Signup;