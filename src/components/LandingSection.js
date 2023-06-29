import React from "react"; 
import { Avatar, Heading, VStack } from "@chakra-ui/react"; 
import myImage from '../images/profile.jpg';
import FullScreenSection from "./FullScreenSection"; 
 
const greeting = "Hello, I am Ricky Huang!"; 
const bio1 = "A frontend developer"; 
const bio2 = "specialized in React"; 
 
const LandingSection = () => ( 
 <FullScreenSection 
   justifyContent="center" 
   alignItems="center" 
   isDarkBackground 
   backgroundColor="#2A4365" 
 > 
   <VStack spacing={16}> 
     <VStack spacing={4} alignItems="center"> 
       <Avatar 
         src={myImage}
         size="2xl" 
         name="Your Name" 
       /> 
       <Heading as="h4" size="md" noOfLines={1}> 
         {greeting} 
       </Heading> 
     </VStack> 
     <VStack spacing={6}> 
       <Heading as="h1" size="3xl" noOfLines={1}> 
         {bio1} 
       </Heading> 
       <Heading as="h1" size="3xl" noOfLines={1}> 
         {bio2} 
       </Heading> 
     </VStack> 
   </VStack> 
 </FullScreenSection> 
); 
 
export default LandingSection;


// import React from "react";
// import { Avatar, Heading, VStack } from "@chakra-ui/react";
// import FullScreenSection from "./FullScreenSection";

// const greeting = "Hello, I am Pete!";
// const bio1 = "A frontend developer";
// const bio2 = "specialised in React";

// // Implement the UI for the LandingSection component according to the instructions.
// // Use a combination of Avatar, Heading and VStack components.
// const LandingSection = () => (
//   <FullScreenSection
//     justifyContent="center"
//     alignItems="center"
//     isDarkBackground
//     backgroundColor="#2A4365"
//   >
//     <VStack spacing={4}>
//       <Avatar size="2xl" src="https://i.pravatar.cc/150?img=7" />
//       <Heading as="h1" size="2xl" color="white">
//         {greeting}
//       </Heading>
//       <Heading as="h2" size="lg" color="white">
//         {bio1}
//       </Heading>
//       <Heading as="h3" size="md" color="white">
//         {bio2}
//       </Heading>
//     </VStack>
//   </FullScreenSection>
// );

// export default LandingSection;
