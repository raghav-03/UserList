import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home";
import { ChakraProvider } from "@chakra-ui/react";
import UserProvider from "./Context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  </UserProvider>
);
