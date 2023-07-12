import {
  Box,
  Heading,
  Text,
  Input,
  Card,
  CardBody,
  Select,
  NumberInput,
  NumberInputField,
  Button,
  Table,
  TableCaption,
  TableContainer,
  Td,
  Tr,
  Th,
  Thead,
  Tbody,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Result from "./Result";
import Charts from "./Charts";

function MainBody(props) {
  const [gradeData, setgradeData] = useState([]);

  // Value Logic
  const [Values, setValues] = useState({
    name: "",
    grade: 0,
    cr_hr: 0,
  });

  const [Changed, setChanged] = useState(0);

  const [Data, setData] = useState([]);

  useEffect(() => {
    setgradeData(props.gradeData);
  });

  const handleInput = (e) => {
    let { name, value } = e.target;
    if (name === "grade" || name === "cr_hr") value = value * 1;
    setValues({ ...Values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...Data, Values]);
    // Data.push(Values)
  };

  // Remove handler
  const removeHandle = (name) => {
    for (let i = 0; i < Data.length; ++i) {
      if (Data[i].name === name) {
        Data.splice(i, 1);
        break;
      }
    }
    // Making a Re-render to change the Values in Table
    setChanged(Changed + 1);
  };

  return (
    <Box
      className="BS"
      textAlign="left"
      textTransform="capitalize"
      width="100%"
    >
      <form onChange={handleInput} onSubmit={handleSubmit}>
        <Card
          my={5}
          height="fit-content"
          w="100%"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        >
          <CardBody>
            <Text fontSize="xs" mt={2} mb={1}>
              enter subject name
            </Text>
            <Input
              autoComplete="off"
              variant="flushed"
              size="md"
              placeholder="Name"
              name="name"
              required
            />
            <Text fontSize="xs" mt={2} mb={1}>
              enter subject Grade
            </Text>
            <Select placeholder="Select Grade" size="md" name="grade" required>
              {gradeData.map((items) => {
                return (
                  <option
                    key={items.value}
                    value={items.value}
                    style={{ width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                  >
                    ( {items.grade} ) ----- ( {items.Range}% )
                  </option>
                );
              })}
            </Select>
            <Text fontSize="xs" mt={2} mb={1}>
              enter subject Credit Hour
            </Text>
            <NumberInput name="cr_hr">
              <NumberInputField placeholder="Min(1) - Max(3)" required />
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
          <TableCaption fontSize="md">Grade Sheet</TableCaption>
          <Thead>
            <Tr>
              <Th textAlign="left">Subject</Th>
              <Th textAlign="center">Cr Hrs</Th>
              <Th textAlign="center">Grade</Th>
              <Th textAlign="right">Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Data.map((elements) => {
              return (
                <Tr key={elements.name}>
                  <Td textAlign="left">{elements.name}</Td>
                  <Td textAlign="center">{elements.cr_hr * 1}</Td>
                  <Td textAlign="center">
                    {gradeData.map((grade) => {
                      return elements.grade === grade.value ? grade.grade : "";
                    })}
                  </Td>
                  <Td
                    display="flex"
                    alignItems="center"
                    justifyContent="end"
                    width="100%"
                  >
                    <Button p={1} onClick={() => removeHandle(elements.name)}>
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
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>

      <Result Data={Data} gradeData={gradeData} />

      <Charts Data={Data} />
    </Box>
  );
}

export default MainBody;
