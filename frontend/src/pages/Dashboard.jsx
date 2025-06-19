import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const Dashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:5000/api/feedback", {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setFeedbacks(res.data));
  }, []);

  const ratingCounts = [1, 2, 3, 4, 5].map(r =>
    feedbacks.filter(f => f.rating === r).length
  );

  const chartData = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "Rating Count",
        data: ratingCounts,
        backgroundColor: "rgb(59, 130, 246)",
      },
    ],
  };

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4 text-center">Dashboard</h2>

      {/* ✅ Chart Container with fixed height */}
      <div className="bg-white p-4 rounded shadow mb-6 max-w-lg mx-auto">
        <div className="h-[300px]"> {/* Fix height here */}
          <Bar data={chartData} options={{
            responsive: true,
            maintainAspectRatio: false
          }} />
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        {feedbacks.map((f, i) => (
          <div key={i} className="bg-white p-3 rounded shadow mb-3">
            <div className="font-semibold">{f.name || "Anonymous"} - {f.rating}⭐</div>
            <div>{f.feedback}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
