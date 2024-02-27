import React from 'react';
import { VStack } from "@chakra-ui/react";

const Section = ({children}) =>{

    return(
        <VStack 
            backgroundColor="white"
        >
            <VStack maxWidth="1280px" minHeight="100vh">
                {children}
            </VStack>

        </VStack>
    );

};


export default Section;
