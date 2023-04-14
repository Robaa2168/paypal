import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import Dashboard from "./components/Dashboard";
// import Header from './components/Header';
import Step2 from "./components/signup/Step2";
import Login from "./components/Login";
import SendMoney from "./components/SendMoney";
import RequestMoney from "./components/RequestMoney";
import Activity from "./components/Activity";
import Signup from "./components/signup/Signup";
const App = () => {
  return (
    <ChakraProvider>
      <Router>
        {/* <Header /> */}

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/send-money" element={<SendMoney />} />
          <Route path="/request-money" element={<RequestMoney />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
