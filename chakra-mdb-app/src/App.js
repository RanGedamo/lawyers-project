import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <BrowserRouter> */}
      <Navbar />
      <Home />
      <Footer />

      {/* </BrowserRouter> */}
    </ChakraProvider>
  );
}
