import { Button, ButtonGroup } from "@chakra-ui/react";
import React, { useState } from "react";
import EditUserModal from "../Pages/EditUserModal";
import { UserState } from "../Context/Context";

const User = ({ user }) => {
  const { users, setusers } = UserState();
  const handleclick = () => {
    const newusers = users.filter((u) => u.id !== user.id);
    setusers([...newusers]);
  };

  return (
    <div>
      {/* {Object.keys(user).length !== 0 && ( */}
      <div className="user">
        <div className="name">{user.name}</div>
        <div className="name">{user.id}</div>
        <div className="email">{user.email}</div>
        <div className="phone">{user.phone}</div>
        <ButtonGroup variant="outline" spacing="6">
          <EditUserModal user={user} />
          <Button colorScheme="red" onClick={handleclick}>
            Delete
          </Button>
        </ButtonGroup>
      </div>
      {/* )} */}
    </div>
  );
};

export default User;
