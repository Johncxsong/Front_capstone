import React from 'react';
import { Link } from 'react-router-dom';

import {Box, HStack, Text} from "@chakra-ui/react";

const Nav = () =>{

    return(
    <Box 
            position="fixed"
            top={0}
            left={0}
            right={0}
            translateY={0}
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="YELLOW"
    >
            <nav className='Nav-bar'>
                <ul>
                    <Link to="/" className='nav-item' >Home</Link>
                    <Link to="/booking" className='nav-item'>Booking</Link>
                    <Link to="/aboutMe" className='nav-item'>About Me</Link>
                </ul>
            </nav>
    </Box>
    );
};


export default Nav;

