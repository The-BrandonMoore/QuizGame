import { Box, Heading, Flex } from "@chakra-ui/react";

function Header() {
  return (
    <Box bg="gray.100" py={4}>
      <Flex maxW="1200px" mx="auto" px={4} align="center">
        <Heading size="lg">Quiz Game</Heading>
      </Flex>
    </Box>
  );
}

export default Header;
