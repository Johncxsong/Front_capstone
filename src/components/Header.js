import React from 'react';
import {Box, HStack,Center} from "@chakra-ui/react";

const Header = () =>{

    return(
        <Box>
            <Center 
                bg='#0C3B2E' h='200px' color= '#F2E6CE'
                fontFamily="Arial" fontSize='xxx-large'
                borderRadius="20px">
                    <b>Little Lemon</b>
            </Center>
        </Box>
    );
};


export default Header;
