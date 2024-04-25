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
import Tax from "./pages/Tax/Tax";
import StaffLog from "./pages/Staff/StaffLog/StaffLog";
import StaffManagement from "./pages/Staff/StaffManagement/StaffManagement";
import Licensor from "./pages/Licensor/Licensor";
import Music from "./pages/Music_Partner/MusicPartner";
import CreateLicensor from "./pages/Licensor/CreateLicensor/CreateLicensor";

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
        <Route path="/tax" element={<Tax />} />
        <Route path="/staffLog" element={<StaffLog />} />
        <Route path="/staffManagement" element={<StaffManagement />} />
        <Route path="/licensor" element={<Licensor />} />
        <Route path="/music" element={<Music />} />
        <Route path="/createLicensor" element={<CreateLicensor />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
