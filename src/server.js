const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables from .env file
dotenv.config();

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS
app.use(cors());

// Endpoint to retrieve the data
app.get("/data", (req, res) => {
  const data = {
    totalTransaction: 10000,
    totalLikes: 232323,
    totalRevenues: 23232,
    totalUsers: 323,
    lineChartData: [
      ["Weeks", "Guest", "User"],
      ["Week 1", 100, 120],
      ["Week 2", 24, 140],
      ["Week 3", 320, 280],
      ["Week 4", 505, 230],
    ],
    pieChartData: [
      ["Task", "Hours per Day"],
      ["Work", 55],
      ["Eat", 32],
      ["Commute", 12],
    ],
    todaysSchedule: [
      {
        title: "Meeting with suppliers from Kuta Mall",
        time: "17:50 - 18:50",
        location: "some cool location",
      },
      {
        title: "Meeting with suppliers from Balli Mall",
        time: "17:50 - 18:50",
        location: "some cool location",
      },
    ],
  };

  res.json(data);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start the server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});