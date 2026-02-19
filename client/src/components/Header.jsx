import React from 'react';
import './Components.css';
import { Link, useNavigate } from 'react-router-dom';
import { isLoggedIn, logout, getUser } from '../utils/auth';
import Logo from '../assets/mikes_world_default.jpg'

const Header = () => {

    const navigate = useNavigate();
    const loggedIn = isLoggedIn();
    const user = getUser();

    const handleLogout = () => {
        logout();
        navigate("/login");
    }

    return(
        <div className='header-div'>
            <ul className='header-list'>
                {loggedIn ? (
                <>
                <Link to='/'>Home</Link>
                <Link to='/predators'>Predators</Link>
                <Link to='/interesting'>Interesting</Link>
                <Link to='/food'>Food</Link>
                <Link to='/politics'>Politics</Link>
                <Link to='/publicfreakouts'>Public Freakouts</Link>
                <Link to='/sports'>Sports</Link>
                <Link to='/videogames'>VideoGames</Link>
                <Link to='/create'>Create</Link>

                {/* Right side */}
            <span className="header-spacer" />
            <span className="header-user">
              {user?.username ? `Hi, ${user.username}!` : "Hi"}
            </span>
            <button className="header-logout" type="button" onClick={handleLogout}>
              Logout
            </button>
                </>
                ) : (
                    <>
                    {/* Left side/Logo */}
                    <img src={Logo} alt="logo" height={70}/>

                    {/* Right Side */}
                <span className="header-spacer" />
                <Link to="/login">Sign in</Link>
                <Link to="/signup">Sign up</Link>
                    </>
                )}
            </ul>
        </div>
    );
};

export default Header;