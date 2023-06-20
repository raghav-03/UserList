import { Button, ButtonGroup } from "@chakra-ui/react";
import React, { useState } from "react";
import { UserState } from "../Context/Context";
import { useToast } from "@chakra-ui/react";
import UserModal from "../Pages/UserModal";
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
    <div>
      <div className="user">
        <div className="name">{user.name}</div>
        <div className="email">{user.email}</div>
        <div className="phone">{user.phone}</div>
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
      </div>
    </div>
  );
};

export default User;
