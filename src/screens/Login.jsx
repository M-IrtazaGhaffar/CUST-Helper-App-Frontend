import { Box, Button, FormControl, Image, Input, Text } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import Loading from "../components/Loading";
import AdminLogin from "../states/Context";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Login() {
    const value = useContext(AdminLogin)
    const navigate = useNavigate()
  const [LoadingScreen, setLoadingScreen] = useState(0);
  const [Data, setData] = useState({
    email: '',
    password: ''
  })

  const handleData = (e) => {
    setData({... Data, [e.target.name]: e.target.value})
    console.log(Data);
  }

  const handleSubmit = async (e) => {
    console.log(Data);
    if (Data.email != "" && Data.password != "") {
        setLoadingScreen(1);

        value.setLoginAttempt(1);
        navigate('/admin/dashboard')
    }
  }
  return (
    <div>
      <Box
        className="Calculation"
        bgColor="gray.300"
        w="100%"
        minHeight="100vh"
        display="flex"
        alignItems="center"
        gap={5}
        flexDirection="column"
        px={10}
        py={2}
      >
        <Header />
        {LoadingScreen ? (
          <Loading />
        ) : (
          <FormControl
            width="320px"
            display="flex"
            flexDirection="column"
            gap={3}
          >
            <Input name="email" type="email" placeholder="Email" bg="white" required onChange={handleData}/>
            <Input name="password" type="password" placeholder="Password" bg="white" required onChange={handleData}/>
            <Button colorScheme="blue" onClick={handleSubmit}>Login</Button>
          </FormControl>
        )}
      </Box>
    </div>
  );
}

export default Login;
