import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { gradeData1 } from "../components/Data.js";
import { gradeData2 } from "../components/Data.js";
import MainBody from "../components/MainBody";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Calculation() {
    const n = useNavigate()
  return (
    <Box
      className="Calculation"
      bgColor="gray.300"
      w="100%"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDirection="column"
      p={2}
    >
      <Header />
      <Text textTransform="capitalize" p={5} fontSize="xl">
        please select your degree type
      </Text>

      <Tabs w="100%" h="100%" isFitted>
        <TabList>
          <Tab>BS Level</Tab>
          <Tab>MS Level</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Heading as="h1" size="md">
              for BS students
            </Heading>
            <MainBody gradeData={gradeData1} />
          </TabPanel>
          <TabPanel>
            <Heading as="h1" size="md">
              for MS students
            </Heading>
            <MainBody gradeData={gradeData2} />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Button p={5} onClick={() => n(-1)} maxWidth="fit-content" m={5}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
      </Button>
    </Box>
  );
}

export default Calculation;
