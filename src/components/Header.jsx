import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../assets/cust-logo.png";

function Header() {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={3}
      flexDirection="column"
      py={3}
    >
      <Image src={Logo} w={150} />
      <Text fontSize="xs">CUST Islamabad</Text>
    </Box>
  );
}

export default Header;
