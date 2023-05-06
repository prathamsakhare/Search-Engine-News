import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { ChakraBaseProvider, theme } from "@chakra-ui/react";
function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Home />
    </ChakraBaseProvider>
  );
}

export default App;
