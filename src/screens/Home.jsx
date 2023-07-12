import { Button, Flex, Heading, Image } from "@chakra-ui/react";
import Logo from "../assets/cust-logo.png";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Flex
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        flexWrap="wrap"
        flexDir="column"
        gap={16}
        bgColor="gray.300"
      >
        <Image src={Logo} w="200px" />
        <Heading px={10} textAlign="center">
          Please choose anyone of the given below
        </Heading>
        <Flex
          alignItems="center"
          justifyContent="center"
          gap={5}
          flexWrap="wrap"
        >
          <Link to="/gpa">
            <Button>GPA Calculator</Button>
          </Link>
          <Link to="/cgpa">
            <Button>CGPA Calculator</Button>
          </Link>
          <Link to="/reviews">
            <Button>Student Reviews about Teachers</Button>
          </Link>
          <Link to="/form">
            <Button>Add Review</Button>
          </Link>
          <Link to="/admin/login">
            <Button>Admin Login</Button>
          </Link>
        </Flex>
      </Flex>
    </div>
  );
}

export default Home;
