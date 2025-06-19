import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const FeedbackForm = () => {
  const [form, setForm] = useState({ name: "", email: "", feedback: "", rating: 5 });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/api/feedback", form);
    toast.success("Feedback submitted!");
    setForm({ name: "", email: "", feedback: "", rating: 5 });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md p-6 rounded-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Submit Feedback</h2>
        <input className="input w-full mb-2 p-2 border rounded" placeholder="Name (optional)" name="name" value={form.name} onChange={handleChange} />
        <input className="input w-full mb-2 p-2 border rounded" placeholder="Email (optional)" name="email" value={form.email} onChange={handleChange} />
        <textarea className="input w-full mb-2 p-2 border rounded" placeholder="Your feedback" name="feedback" value={form.feedback} onChange={handleChange}></textarea>
        <input className="input w-full mb-4 p-2 border rounded" type="number" min="1" max="5" name="rating" value={form.rating} onChange={handleChange} />
        <button onClick={handleSubmit} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
          Submit
        </button>
      </div>
    </div>
  );
};

export default FeedbackForm;
