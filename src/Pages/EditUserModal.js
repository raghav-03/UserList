import React from "react";
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
  useToast,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { UserState } from "../Context/Context";

const EditUserModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { users, setusers, fetch, setfetch } = UserState();
  const [newuser, setnewuser] = useState({});
  const toast = useToast();
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
    users[newuser.id - 1] = newuser;
    setusers([...users]);
    toast({
      title: "User Added Successfully",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
  };
  const handlechange = (e) => {
    setnewuser({ ...newuser, [e.target.name]: e.target.value });
  };
  const handleopen = () => {
    setnewuser(user);
    onOpen();
  };
  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <Button colorScheme="blue" onClick={handleopen}>
          Edit
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
            Edit User
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
                <Button type="submit" colorScheme="blue">
                  Update User
                </Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditUserModal;
