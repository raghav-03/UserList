import React, { useEffect } from "react";
import User from "./User";
import { UserState } from "../Context/Context";
const Users = () => {
  const { users, setusers } = UserState();
  return (
    <div>
      <div className="users">
        {users.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default Users;
