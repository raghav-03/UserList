import React, { useState, useEffect } from "react";
import Users from "../Component/Users";
import UserModal from "../Pages/UserModal";
const Home = () => {
  const [newuser, setnewuser] = useState({});
  const [user, setuser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <>
      <div>App Name</div>
      <UserModal
        user={user}
        newuser={newuser}
        setnewuser={setnewuser}
        text={"Add"}
      />
      <Users />
    </>
  );
};

export default Home;
