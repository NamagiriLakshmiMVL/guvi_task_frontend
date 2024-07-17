import React, { useState } from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

const DetailsPage = () => {
  const [show, setShow] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");
  const handleClick = () => setShow(!show);

  const submitHandler = () => {};
  return (
    <Container maxW="xl" centerContent>
      <Box fontSize={"50px"}>
        <Text>Profile Page</Text>
      </Box>

      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        borderWidth="1px"
        borderRadius="lg"
        m="40px 0 15px 0"
        textAlign={"center"}
        width={"100%"}
        color={"black"}
      >
        <FormControl id="age" isRequired>
          <FormLabel>Age</FormLabel>
          <Input
            placeholder="Enter Your Email"
            onChange={(e) => setAge(e.target.value)}
          />
        </FormControl>

        <FormControl id="gender" isRequired>
          <FormLabel>Gender</FormLabel>
          <RadioGroup onChange={setShow} value={show}>
            <Stack direction="row">
              <Radio value="1">Male</Radio>
              <Radio value="2">Female</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <FormControl id="dob" isRequired>
          <FormLabel>DOB</FormLabel>
          <Input
            placeholder="Select Date and Time"
            size="md"
            type="datetime-local"
          />
        </FormControl>

        <FormControl id="mobile" isRequired>
          <FormLabel>Mobile </FormLabel>
          <InputGroup>
            <Input type="tel" placeholder="Phone number" />
          </InputGroup>
        </FormControl>

        <Button
          colorScheme="blue"
          width={"100%"}
          style={{ marginTop: 15 }}
          onClick={submitHandler}
        >
          Complete
        </Button>
      </Box>
    </Container>
  );
};

export default DetailsPage;
