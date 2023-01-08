import React from 'react';
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
import Home  from "./pages/Home/Home"

export default function App() {
  return (
    <ChakraProvider theme={theme}>
<Home/>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};