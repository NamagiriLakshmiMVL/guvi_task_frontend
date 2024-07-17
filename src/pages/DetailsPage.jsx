import React, { useState } from "react";
import {
  Box,
  Container,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import axios from "axios";
import { toast } from "react-toastify";

const DetailsPage = () => {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = () => {
    const userDetails = {
      gender,
      age,
      mobile,
      dob,
    };
    axios.post(`http://localhost:2000/profile/add`, userDetails).then((res) => {
      res.data.message === "Information Added Successfully" &&
        toast.success(res.data.message, {
          position: "top-center",
          autoClose: 1000,
        });
    });
  };

  return (
    <Container maxW="xl" centerContent>
      <Box fontSize={"50px"} d="flex">
        <Text>Profile Page</Text>
        <Button colorScheme="teal" size="md" textAlign={"center"}>
          Log-Out
        </Button>
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
            placeholder="Enter Your Age"
            onChange={(e) => setAge(e.target.value)}
          />
        </FormControl>

        <FormControl id="gender" isRequired>
          <FormLabel>Gender</FormLabel>
          <RadioGroup onChange={(e) => setGender(e.target.value)}>
            <Stack direction="column">
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <FormControl id="dob" isRequired>
          <FormLabel>DOB</FormLabel>
          <Input
            placeholder="Select Date and Time"
            size="md"
            type="datetime-local"
            onChange={(e) => setDob(e.target.value)}
          />
        </FormControl>

        <FormControl id="mobile" isRequired>
          <FormLabel>Mobile </FormLabel>
          <InputGroup>
            <Input
              type="tel"
              placeholder="Phone number"
              onChange={(e) => setMobile(e.target.value)}
            />
          </InputGroup>
        </FormControl>

        <Button
          colorScheme="blue"
          width={"100%"}
          style={{ marginTop: 15 }}
          onClick={handleSubmit}
        >
          Complete
        </Button>
      </Box>
    </Container>
  );
};

export default DetailsPage;
