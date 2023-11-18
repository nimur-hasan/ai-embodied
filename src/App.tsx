import React from "react";
import logo from "./logo.svg";
import { Flex, Box } from "@chakra-ui/react";
import Navigation from "./components/shared/Navigation";
import Test from "./pages/Test/Test";

function App() {
  return (
    <Flex>
      <Navigation />
      <Box flexGrow='1'>
        {/* Content */}
        <Test />
      </Box>
    </Flex>
  );
}

export default App;
