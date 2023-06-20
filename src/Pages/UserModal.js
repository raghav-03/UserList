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
} from "@chakra-ui/react";
import { UserState } from "../Context/Context";
import { useToast } from "@chakra-ui/react";
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
  };
  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <Button colorScheme="blue" onClick={handleopen}>
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
            {`${text} user`}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDir="column" alignItems="center">
            <form onSubmit={submitHandler}>
              <input
                placeholder="Enter Your Name"
                name="name"
                onChange={handlechange}
                value={newuser.name}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email Address"
                onChange={handlechange}
                value={newuser.email}
                required
              />
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                value={newuser.phone}
                onChange={handlechange}
              />
              <ModalFooter>
                <Button onClick={onClose} type="submit" colorScheme="blue">
                  {`${text} user`}
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
