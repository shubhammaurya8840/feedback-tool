import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminLogin = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "https://feedback-tool.onrender.com/api/admin/login",
        form
      );
      localStorage.setItem("token", res.data.token);
      toast.success("Login successful");
      navigate("/admin/dashboard");
    } catch {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg p-6 rounded-md w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
        <input
          className="w-full p-2 mb-3 border rounded"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          className="w-full p-2 mb-3 border rounded"
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
