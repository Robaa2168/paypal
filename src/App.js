import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/Login';
import SendMoney from './components/SendMoney';
import RequestMoney from './components/RequestMoney';
import Activity from './components/Activity';
import Settings from './components/settings/Settings';

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/send-money" element={<SendMoney />} />
        <Route path="/request-money" element={<RequestMoney />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
