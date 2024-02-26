import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Nav = () =>{
    return(
        <nav className='Nav-bar'>
            <ul>
                <Link to="/" className='nav-item' >Home</Link>
                <Link to="/booking" className='nav-item'>Booking</Link>
                <Link to="/aboutMe" className='nav-item'>About Me</Link>
            </ul>
        </nav>
    );
};


export default Nav;

