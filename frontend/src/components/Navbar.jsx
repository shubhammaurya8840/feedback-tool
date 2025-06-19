import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow text-white flex justify-between items-center">
      <h1 className="text-lg font-bold">Feedback System</h1>
      <div className="space-x-4">
        <Link to="/feedback" className="hover:underline">
          Feedback
        </Link>
        <Link to="/admin/login" className="hover:underline">
          Admin Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
