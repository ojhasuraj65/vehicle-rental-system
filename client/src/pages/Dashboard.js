import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <h1>🚗 Admin Dashboard</h1>

      <p className="subtitle">
        Welcome back! Here's your vehicle rental overview.
      </p>

      <div className="stats">

        <div className="card">
          <div className="icon">🚘</div>
          <h2>120</h2>
          <p>Total Vehicles</p>
        </div>

        <div className="card">
          <div className="icon">📅</div>
          <h2>450</h2>
          <p>Total Bookings</p>
        </div>

        <div className="card">
          <div className="icon">👨‍💼</div>
          <h2>300</h2>
          <p>Customers</p>
        </div>

        <div className="card">
          <div className="icon">💰</div>
          <h2>₹2.5L</h2>
          <p>Revenue</p>
        </div>

      </div>

      <div className="dashboard-bottom">

        <div className="recent-bookings">

          <h2>Recent Bookings</h2>

          <table>

            <thead>

              <tr>
                <th>Customer</th>
                <th>Vehicle</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>Suraj Ojha</td>
                <td>BMW Luxury Car</td>
                <td className="active">Active</td>
              </tr>

              <tr>
                <td>Rahul Kumar</td>
                <td>Royal Enfield</td>
                <td className="completed">Completed</td>
              </tr>

              <tr>
                <td>Aman Singh</td>
                <td>Range Rover</td>
                <td className="pending">Pending</td>
              </tr>

            </tbody>

          </table>

        </div>

        <div className="quick-actions">

          <h2>Quick Actions</h2>

          <button>Add Vehicle</button>

          <button>View Bookings</button>

          <button>Manage Customers</button>

          <button>Generate Report</button>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;