import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Coin from "./pages/Coins/Coins";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/signUp/signUp";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import ProtectedRoute from "./components/ProtectedRoutes";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
