import React, { useState, useEffect, Fragment } from "react";
import Users from "../Component/Users";
import UserModal from "../Pages/UserModal";
import { Box, Container, Text } from "@chakra-ui/react";
const Home = () => {
  const [newuser, setnewuser] = useState({});
  const [user, setuser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <Fragment>
      <Container maxW="xl" centerContent>
        <Box
          display="flex"
          justifyContent="center"
          p={3}
          bg="white"
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <Text fontSize="4xl" fontFamily="Work sans" textAlign="center">
            Demo - App
          </Text>
        </Box>
        <UserModal
          user={user}
          newuser={newuser}
          setnewuser={setnewuser}
          text={"Add"}
        />
        <br />
        <Users />
      </Container>
    </Fragment>
  );
};

export default Home;
