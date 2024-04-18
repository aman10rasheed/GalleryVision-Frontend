import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/Registeer/Register";
import SideNav from "./pages/Dashboard/SideNav";
import RecoverPassword from "./pages/RecoverPwd/RecoverPassword";
import Header from "./pages/Header/Header";
import CSVupload from "./pages/Upload/CSVupload";
import Channel from "./pages/Channel/Channel";
import Payment from "./pages/Payment/Payment";
import Invoice from "./pages/Invoice/Invoice";
import Report from "./pages/Report/Report";
import Settings from "./pages/Settings/Settings";

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
        <Route path="/CSVupload" element={<CSVupload />} />
        <Route path="/channel" element={<Channel />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/report" element={<Report />} />
        <Route path="/settings" element={<Settings />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
