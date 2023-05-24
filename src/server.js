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
    totalTransaction: '1,520',
    totalLikes: '9,721',
    totalRevenues: '$2,129,430',
    totalUsers: '892',
    activities: {
        timeline: 'May - June 2021',
        lineChartData: [
            ["Weeks", "Guest", "User"],
            ["Week 1", 100, 120],
            ["Week 2", 24, 140],
            ["Week 3", 320, 280],
            ["Week 4", 505, 230],
        ],
        lineChartDataOptions: {
            curveType: "function",
            legend: { position: "bottom" },
            series: [
              {color: '#E9A0A0'},
              { color: '#9BDD7C'}
            ]
        }
    },
    topProducts: {
        timeline: 'May - June 2021',
        pieChartData: [
            ["Products", "Sales"],
            ["Basic Tees", 55],
            ["Custom Short Pants", 32],
            ["Super Hoodies", 14],
          ],
        pieChartDataOptions: {
            pieStartAngle: 180,
            slices: [{ color: '#98D89E' }, { color: '#F6DC7D' }, { color: '#EE8484' }],
            legend: 'none'
        },  
        topThreeProducts: [
            {
                id: 212,
                name: 'Basic Tees',
                value: '55%',
                color: '#98D89E'
            },
            {
                id: 213,
                name: 'Custom Short Pants',
                value: '32%',
                color: '#F6DC7D'
            },
            {
                id: 214,
                name: 'Super Hoodies',
                value: '14%',
                color: '#EE8484'
            },
        ]  
    },
    todaysSchedule: [
      {
        id: 12121,
        title: "Meeting with suppliers from Kuta Bali",
        time: "14.00-15.00",
        location: "at Sunset Road, Kuta, Bali",
      },
      {
        id: 12122,
        title: "Check operation at Giga Factory 1",
        time: "18.00-20.00",
        location: "at Central Jakarta",
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