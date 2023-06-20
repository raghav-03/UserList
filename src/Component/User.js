import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { UserState } from "../Context/Context";
import { useToast } from "@chakra-ui/react";
import UserModal from "../Pages/UserModal";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
const User = ({ user }) => {
  const { users, setusers } = UserState();
  const toast = useToast();
  const [newuser, setnewuser] = useState({});
  const handleclick = () => {
    const newusers = users.filter((u) => u.id !== user.id);
    setusers([...newusers]);
    toast({
      title: "User Deleted Successfully",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
  };
  return (
    <Card>
      <CardBody>
        <Stack spacing="3">
          <Heading size="md">{user.name}</Heading>
          <InputGroup className="input">
            <InputLeftElement pointerEvents="none">
              <EmailIcon color="gray.300" />
            </InputLeftElement>
            <Input type="email" value={user.email} readOnly />
          </InputGroup>
          <InputGroup className="input">
            <InputLeftElement pointerEvents="none">
              <PhoneIcon color="gray.300" />
            </InputLeftElement>
            <Input type="number" value={user.phone} readOnly />
          </InputGroup>
          <ButtonGroup variant="outline" spacing="6">
            <UserModal
              user={user}
              newuser={newuser}
              setnewuser={setnewuser}
              text={"Edit"}
            />
            <Button colorScheme="red" onClick={handleclick}>
              Delete
            </Button>
          </ButtonGroup>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default User;
