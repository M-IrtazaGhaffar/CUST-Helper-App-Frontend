import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../assets/cust-logo.png";

function Header() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent='center'
      gap={3}
      flexDirection="row"
      py={3}
    >
      <Image src={Logo} w={50} />
      {/* <Text fontSize="xs">CUST</Text>
      <Image src={Logo} w={50} /> */}
    </Box>
  );
}

export default Header;
