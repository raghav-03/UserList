import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setusers] = useState([]);
  const [id, setid] = useState(1);
  return (
    <UserContext.Provider
      value={{
        users,
        setusers,
        id,
        setid,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserState = () => {
  return useContext(UserContext);
};

export default UserProvider;
