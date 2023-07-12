import * as React from "react";
import { ChakraProvider, Text } from "@chakra-ui/react";
import Home from "./screens/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calculation from "./screens/Calculation";
import Splash from "./screens/Splash";
import Reviews from "./screens/Reviews";
import CGPA from "./screens/CGPA";
import Form from "./screens/Form";
import Login from "./screens/Login";
import Dashboard from "./screens/Dasboard";
import { useState } from "react";
import AdminLogin from "./states/Context";

function App() {
  const [LoginAttempt, setLoginAttempt] = useState(0);
  return (
    <ChakraProvider>
      <BrowserRouter>
        <AdminLogin.Provider value={{ LoginAttempt, setLoginAttempt }}>
          <Routes>
            <Route exact path="/" element={<Splash />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/cgpa" element={<CGPA />} />
            <Route exact path="/reviews" element={<Reviews />} />
            <Route exact path="/gpa" element={<Calculation />} />
            <Route exact path="/form" element={<Form />} />
            <Route exact path="/admin/">
              <Route exact path="login" element={<Login />} />
              <Route exact path="dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </AdminLogin.Provider>
      </BrowserRouter>
      <Text
        fontSize="sm"
        textAlign="center"
        bgColor="blue.500"
        p={1}
        color="whitesmoke"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={5}
      >
        <span>
          Made by{" "}
          <a href="https://www.ittidevelops.com" target="_blank">
            ITTI Develops
          </a>
        </span>
        -
        <Text display="flex" alignItems="center" gap={1}>
          Copyright
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="currentColor"
            class="bi bi-c-circle"
            viewBox="0 0 16 16"
          >
            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z" />
          </svg>
          2023
        </Text>
      </Text>
    </ChakraProvider>
  );
}

export default App;
