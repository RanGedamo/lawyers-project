import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/UserContext";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ColorModeScript } from '@chakra-ui/react';
import { ChakraProvider, theme } from "@chakra-ui/react";

ReactDOM.render(
  <AuthContextProvider>
    <React.StrictMode>
    <ColorModeScript />
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </AuthContextProvider>,
  document.getElementById("root")
);
