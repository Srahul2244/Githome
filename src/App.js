import React from "react";
import Github from "./components/Github";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <ChakraProvider>
        <Github />
      </ChakraProvider>
    </div>
  );
}

export default App;
