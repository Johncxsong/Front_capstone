import React from 'react';

const Nav = () =>{
    return(
        <nav className='Nav-bar'>
            <ul style={{display:"flex-inline",listStyleType:"none", margin:"10px"}}>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
        </nav>
    );
};


export default Nav;

