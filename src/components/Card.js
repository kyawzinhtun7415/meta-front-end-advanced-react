import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      borderWidth={1}
      borderColor="gray.200"
      borderRadius="lg"
      overflow="hidden"
      spacing={4}
      align="start"
      bg="white"
      textColor="black"
    >
      <Image borderRadius="md" src={imageSrc} alt={title} />
      <VStack align="start" spacing={2} p={4} >
        <Heading as="h3" size="lg">
          {title}
        </Heading>
        <Text>{description}</Text>
      </VStack >
      <HStack spacing={2} p={4} >
        <Text>See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack> 
  );};

export default Card;
