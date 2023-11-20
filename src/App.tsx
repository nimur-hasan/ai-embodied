import React, { useState } from "react";
import logo from "./logo.svg";
import { Flex, Box } from "@chakra-ui/react";
import Navigation from "./components/shared/Navigation";
import Test from "./pages/Test/Test";
import DummyData from "./data/dummy_data.json";

function App() {
  const [data, setData] = useState(DummyData);
  return (
    <Flex>
      <Navigation />
      <Box flexGrow="1">
        {/* Content */}
        <Test data={data} />
      </Box>
    </Flex>
  );
}

export default App;
