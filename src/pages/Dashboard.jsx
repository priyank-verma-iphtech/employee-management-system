import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./logo.jpg";

const Dashboard = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const getInitials = (name) => {
    if (!name) return "U";
    const parts = name.trim().split(" ");
    return parts.length > 1
      ? parts[0][0].toUpperCase() + parts[1][0].toUpperCase()
      : parts[0][0].toUpperCase();
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const employees = [
    { name: "John Doe", email: "john@example.com", department: "Engineering", status: "Active" },
    { name: "Jane Smith", email: "jane@example.com", department: "Marketing", status: "Active" },
    { name: "Bob Johnson", email: "bob@example.com", department: "HR", status: "Inactive" },
  ];

  return (
    <div className="dashboard">
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="Logo" />
          <h1>Employee Management System</h1>
        </div>

        <div className="avatar-container">
          <div className="avatar" onClick={() => setShowMenu(!showMenu)}>
            {getInitials(currentUser?.name)}
          </div>
          {showMenu && (
            <div className="dropdown-menu">
              <p>{currentUser?.email || "No email"}</p>
              <hr />
              <button onClick={() => navigate("/profile")}>Profile</button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>

      <div className="navbar">
        <h2>Welcome, {currentUser ? currentUser.name : "User"}!</h2>
        <div className="navbar-contains">
          <Link to="/home"><p>Home</p></Link>
          <Link to="/about"><p>About</p></Link>
          <Link to="/contactUs"><p>Contact Us</p></Link>
          <Link to="/help"><p>Help</p></Link>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-cards">
          <div className="card"><h3>Total Employees</h3><p>120</p></div>
          <div className="card"><h3>Active Employees</h3><p>110</p></div>
          <div className="card"><h3>Pending Leaves</h3><p>5</p></div>
          <div className="card"><h3>Attendance Today</h3><p>92%</p></div>
        </div>

        <div className="employee-table">
          <h2>Employee List</h2>
          <table>
            <thead>
              <tr><th>Name</th><th>Email</th><th>Department</th><th>Status</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {employees.map((emp, index) => (
                <tr key={index}>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.department}</td>
                  <td>{emp.status}</td>
                  <td><button>Edit</button> | <button>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <footer className="footer">
        <p>© 2025 Employee Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
