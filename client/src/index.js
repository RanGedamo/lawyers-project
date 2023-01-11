import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { AuthContextProvider } from "./context/UserContext";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ColorModeScript } from "@chakra-ui/react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Provider } from "react-redux";
import { userStore } from "./store/userStore";
const initialOptions = {
  "client-id": process.env.REACT_APP_PAYPAL_KEY,
  currency: "USD",
  intent: "capture",
};
ReactDOM.render(
    // <AuthContextProvider>
      <PayPalScriptProvider options={initialOptions}>
        <React.StrictMode>
          <ColorModeScript />
          <Provider store={userStore}>

          <ChakraProvider theme={theme}>

            <App />
          </ChakraProvider>
          </Provider>

        </React.StrictMode>
      </PayPalScriptProvider>
    // </AuthContextProvider>
  ,

  document.getElementById("root")
);
