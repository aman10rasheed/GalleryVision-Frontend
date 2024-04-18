import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/Registeer/Register";
import SideNav from "./pages/Dashboard/SideNav";
import RecoverPassword from "./pages/RecoverPwd/RecoverPassword";
import Header from "./pages/Header/Header";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sidebar" element={<SideNav />} />
        <Route path="/recover" element={<RecoverPassword />} />
        <Route path="/header" element={<Header />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
