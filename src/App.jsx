import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import OrderSummary from './pages/OrderSummary';
import DeliveryDetails from './pages/DeliveryDetails';
import Payment from './pages/Payment';
import OrderState from './pages/OrderState';

function App() {
  return (
    <Router basename="/Chuks-Kitchen-website">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/checkout" element={<OrderSummary />} />
        <Route path="/delivery" element={<DeliveryDetails />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/track-order" element={<OrderState />} />
      </Routes>
    </Router>
  );
}

export default App;