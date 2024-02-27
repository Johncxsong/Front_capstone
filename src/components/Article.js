import React from 'react';
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

const Article = ({ title, description, imageSrc }) =>{
    return(
        <article>
            <VStack color="black" backgroundColor="white" cursor="pointer" borderRadius="xl">
                <Image borderRadius="xl" src={imageSrc} alt={title} />
                <HStack justifyContent="space-between" alignItems="center">
                    <Heading as="h3" size="md">
                        {title}
                    </Heading>
                </HStack>
                <Text color="#64748b" fontSize="lg" padding="10px" marginLeft="10px">
                {description}
                </Text>

                <HStack spacing={2} alignItems="center">
                    <p>See more</p>
                </HStack>
            </VStack>
        </article>
    );
};


export default Article;
