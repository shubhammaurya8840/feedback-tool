import React from "react";
import { Routes, Route } from "react-router-dom";
import FeedbackForm from "./pages/FeedbackForm";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar"; // ✅ Navbar import

function App() {
  return (
    <>
      <Navbar /> {/* ✅ Navbar added here */}
      <Routes>
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
