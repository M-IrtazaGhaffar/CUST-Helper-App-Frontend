import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  NumberInput,
  NumberInputField,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Charts from "../components/Charts";

function CGPA() {
  const n = useNavigate()
  
  const [Value, setValue] = useState(0);
  const [Semesters, setSemesters] = useState([]);
  const [cgpa, setcgpa] = useState(0);
  const [Rerender, setRerender] = useState(1);
  const [Rerender2, setRerender2] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    Semesters.push({
      no: Rerender,
      gpa: Value,
    });
    setRerender(Rerender + 1);
    console.log(Semesters);
  };

  const removeHandle = (no) => {
    for (let index = 0; index < Semesters.length; index++) {
      if (no === Semesters[index].no) {
        console.log("Found: " + index);
        Semesters.splice(index, 1);
        console.log(Semesters);
      }
    }
    setRerender2(Rerender2 + 1);
  };

  const calculateCGPA = async () => {
    var sum = 0;
    for (let i = 0; i < Semesters.length; i++) {
      sum = sum + parseFloat(Semesters[i].gpa);
    }
    console.log(sum);
    setcgpa(sum / Semesters.length);
  };
  return (
    <Flex flexDir="column">
      <Flex
        justifyContent="center"
        alignContent="center"
        bgColor="gray.300"
        minH="100vh"
        flexDir="column"
      >
        <Header />
        <Flex flexDirection="column" mx={10}>
          <form onSubmit={handleSubmit}>
            <Card
              my={5}
              height="fit-content"
              w="100%"
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            >
              <CardBody>
                <Text fontSize="xs" mt={2} mb={1}>
                  Enter GPA of Semester {Semesters.length + 1}
                </Text>
                <NumberInput name="s_gpa" min={1} max={14}>
                  <NumberInputField
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Semesters (1-14) ~ GPA (0-4)"
                    required
                    min
                  />
                </NumberInput>
                <Button
                  type="submit"
                  variant="solid"
                  bg="blue.500"
                  color="white"
                  my={3}
                  float="right"
                >
                  Add
                </Button>
              </CardBody>
            </Card>
          </form>
          <TableContainer
            border="1px"
            borderColor="blue.500"
            borderRadius={3}
            my={7}
            p={3}
          >
            <Table size="sm" width="100%" scrollBehavior="smooth">
              <TableCaption fontSize="md">Grade Card</TableCaption>
              <Thead>
                <Tr display="flex" justifyContent="space-between" width="100">
                  <Th>Sr#</Th>
                  <Th>GPA</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr
                  display="flex"
                  justifyContent="space-between"
                  width="100"
                  flexDirection="column"
                >
                  {Semesters.map((item) => {
                    return (
                      <Box
                        display="flex"
                        width="100%"
                        justifyContent="space-between"
                      >
                        <Td>{item.no}</Td>
                        <Td>{item.gpa}</Td>
                        <Td>
                          <Button p={1} onClick={() => removeHandle(item.no)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-trash3"
                              viewBox="0 0 16 16"
                              color="red"
                            >
                              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                            </svg>
                          </Button>
                        </Td>
                      </Box>
                    );
                  })}
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Button
            onClick={calculateCGPA}
            variant="solid"
            bg="blue.500"
            color="white"
            my={3}
            float="right"
          >
            Calculate CGPA
          </Button>
          <Card marginBottom={10} display='flex' flexDirection='column' alignItems='center'>
            <CardHeader>Your Calculated CGPA for {Semesters.length} Semesters</CardHeader>
            <CardBody display='flex' alignItems='center' gap={3}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-calculator"
                viewBox="0 0 16 16"
              >
                <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z" />
              </svg>
              <Text fontSize={30}>{cgpa.toFixed(5)}</Text>
            </CardBody>
          </Card>

          <Charts Data={Semesters} />

          <Text margin={5} textAlign='center'>
          If you want to calculate the result again with new values then click on the button below!
          </Text>
          <Button
            onClick={() => {
              setSemesters([])
              setValue(0)
              setcgpa(0)
              setRerender(1)
              setRerender2(0)
            }}
            variant="solid"
            bg="blue.500"
            color="white"
            marginBottom={10}
            float="right"
          >
            Reset
          </Button>
        </Flex>
      <Flex justifyContent='center'>
      <Button p={5} onClick={() => n(-1)} maxWidth='fit-content' m={5}>
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
      </Flex>
      </Flex>
    </Flex>
  );
}

export default CGPA;
