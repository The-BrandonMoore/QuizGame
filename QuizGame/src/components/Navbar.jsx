// src/components/Navbar.jsx
import { Box, Flex, Button, Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
  return (
    <Box as="nav" bg="gray.800" color="white" p={4}>
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Flex gap={4}>
          <ChakraLink as={RouterLink} to="/">
            Home
          </ChakraLink>
          <ChakraLink as={RouterLink} to="/study">
            Study
          </ChakraLink>
          <ChakraLink as={RouterLink} to="/quiz">
            Quiz
          </ChakraLink>
          <ChakraLink as={RouterLink} to="/dashboard">
            Dashboard
          </ChakraLink>
        </Flex>
        <Button as={RouterLink} to="/login" colorScheme="blue">
          Login
        </Button>
      </Flex>
    </Box>
  );
}

export default Navbar;
// This code defines a `Navbar` component using Chakra UI and React Router. The `Navbar` consists of a navigation bar with links to different pages of the application, including "Home", "Study", "Quiz", and "Dashboard". Each link is created using the `ChakraLink` component, which is styled as a link and uses `RouterLink` for navigation. The navigation bar also includes a "Login" button that directs users to the login page. The layout is responsive and visually appealing, with a dark background and white text. The `Flex` component is used to create a flexible layout that adjusts based on the available space. Overall, this `Navbar` component provides a clean and organized navigation experience for users.
