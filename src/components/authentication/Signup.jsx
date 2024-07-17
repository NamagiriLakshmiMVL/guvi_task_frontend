import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = async () => {
    const userDetails = {
      name,
      email,
      password,
    };
    await axios
      .post(`http://localhost:2000/users/register`, userDetails)
      .then((res) => {
        res.data.message === "User Added Successfully"
          ? toast.success(res.data.message, {
              position: "top-center",
              autoClose: 1000,
            }) && navigate("/home")
          : toast.error(res.data.message, {
              position: "top-center",
              autoClose: 1000,
            });
      });
  };

  return (
    <VStack spacing={"5px"}>
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>

      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>
      </FormControl>

      <FormControl id="confirm-password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Enter Your Confirm Password"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
        </InputGroup>
      </FormControl>

      <Button
        colorScheme="blue"
        width={"100%"}
        style={{ marginTop: 15 }}
        onClick={handleClick}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
