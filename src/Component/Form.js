import React, { useState } from "react";
import { useToast } from "@chakra-ui/toast";
import { UserState } from "../Context/Context";

const Form = () => {
  const { users, setusers } = UserState();
  const { id, setid } = UserState();
  const toast = useToast();
  const [user, setuser] = useState({
    name: "",
    email: "",
    phone: "",
    id: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    if (user.phone.length != 10) {
      toast({
        title: "Number must be of length 10",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    user.id = users.length + 1;
    setusers([...users, user]);
    setuser({
      name: "",
      email: "",
      phone: "",
    });

    toast({
      title: "User Added Successfully",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
  };
  const handlechange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          placeholder="Enter Your Name"
          name="name"
          onChange={handlechange}
          value={user.name}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email Address"
          onChange={handlechange}
          value={user.email}
          required
        />
        <input
          type="number"
          name="phone"
          placeholder="Phone Number"
          value={user.phone}
          onChange={handlechange}
        />
        <input type="submit" value="Add User" className="submit" />
      </form>
    </div>
  );
};

export default Form;
