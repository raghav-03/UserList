import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
} from "@chakra-ui/react";
import { UserState } from "../Context/Context";
import { useToast } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import "./UserModal.css";
const UserModal = ({ user, children, text, newuser, setnewuser }) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handlechange = (e) => {
    setnewuser({ ...newuser, [e.target.name]: e.target.value });
  };
  const { users, setusers } = UserState();

  const handleopen = () => {
    setnewuser(user);
    onOpen();
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (newuser.phone.length !== 10) {
      toast({
        title: "Number must be of length 10",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    if (text === "Edit") {
      users[newuser.id - 1] = newuser;
      setusers([...users]);
    } else {
      newuser.id = users.length + 1;
      setusers([...users, newuser]);
      setnewuser({
        name: "",
        email: "",
        phone: "",
      });
    }

    toast({
      title: `User ${text}ed Successfully`,
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
    onClose();
  };
  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <Button
          variant="outline"
          spacing="6"
          colorScheme="blue"
          onClick={handleopen}
        >
          {text}
        </Button>
      )}
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontSize="35px"
            fontFamily="Work sans"
            display="flex"
            justifyContent="center"
          >
            {`${text} User`}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDir="column" alignItems="center">
            <form onSubmit={submitHandler}>
              <InputGroup className="input">
                <InputLeftElement pointerEvents="none">
                  <Avatar size="2xs" color="gray.300" />
                </InputLeftElement>
                <Input
                  placeholder="Enter Your Name"
                  name="name"
                  onChange={handlechange}
                  value={newuser.name}
                  required
                />
              </InputGroup>
              <InputGroup className="input">
                <InputLeftElement pointerEvents="none">
                  <EmailIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email Address"
                  onChange={handlechange}
                  value={newuser.email}
                  isRequired
                />
              </InputGroup>
              <InputGroup className="input">
                <InputLeftElement pointerEvents="none">
                  <PhoneIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  type="number"
                  placeholder="Phone number"
                  onChange={handlechange}
                  value={newuser.phone}
                  name="phone"
                  isrequired
                />
              </InputGroup>
              <ModalFooter>
                <Button
                  type="submit"
                  colorScheme="blue"
                  variant="outline"
                  spacing="6"
                >
                  {`${text} User`}
                </Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserModal;
