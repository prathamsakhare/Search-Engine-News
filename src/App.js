import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { ChakraBaseProvider, theme } from "@chakra-ui/react";
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./components/Header";
import Headlines from "./components/Headlines";
import News from "./components/News";
import NewsDetails from "./components/NewsDetails";
function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headlines" element={<Headlines />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetails />} />
          
        </Routes>
      </Router>
    </ChakraBaseProvider>
  );
}

export default App;
