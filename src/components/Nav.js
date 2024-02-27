import React from 'react';
import { Link } from 'react-router-dom';

import {Box, HStack, Text} from "@chakra-ui/react";

const Nav = () =>{

    return(
    <Box backgroundColor="YELLOW" color="Black">

            <nav className='Nav-bar'>
                <ul>
                    <Link to="/" className='nav-item' ><b>Home</b></Link>
                    <Link to="/booking" className='nav-item'><b>Booking</b></Link>
                    <Link to="/aboutMe" className='nav-item'><b>About Me</b></Link>
                </ul>
            </nav>
    </Box>
    );
};


export default Nav;

