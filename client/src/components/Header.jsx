import React from 'react';
import './Components.css';
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div className='header-div'>
            <ul className='header-list'>
                <Link to='/home'>Home</Link>
                <Link to='/predators'>Predators</Link>
                <Link to='/interesting'>Interesting</Link>
                <Link to='/food'>Food</Link>
                <Link to='/politics'>Politics</Link>
                <Link to='/publicfreakouts'>Public Freakouts</Link>
                <Link to='/sports'>Sports</Link>
                <Link to='/videogames'>VideoGames</Link>

            </ul>
        </div>
    )
}

export default Header;