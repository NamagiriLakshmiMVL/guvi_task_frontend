import React from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Login from "../components/authentication/Login";
import Signup from "../components/authentication/Signup";

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
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
        <Tabs isFitted variant="soft-rounded">
          <TabList mb={"1em"}>
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>{<Login />}</TabPanel>
            <TabPanel>{<Signup />}</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
