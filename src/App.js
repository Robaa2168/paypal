import { ChakraProvider } from "@chakra-ui/react";
import Dashboard from "./components/Dashboard";
// import Header from './components/Header';
import Step1 from "./components/signup/Step1";
import Step4 from "./components/signup/Step4";
import Step3 from "./components/signup/Step3";
import Step2 from "./components/signup/Step2";
import Login from "./components/signin/Login";
import SendMoney from "./components/SendMoney";
import RequestMoney from "./components/RequestMoney";
import Activity from "./components/Activity";
import Signup from "./components/signup/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <ChakraProvider>
      <Router>
        {/* <Header /> */}

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/step4" element={<Step4 />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step1" element={<Step1 />} />
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
