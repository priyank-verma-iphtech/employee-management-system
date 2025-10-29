import React from 'react'

const Home = () => {
  return (
    <div className="home-page">
  <header>
    <h1>Welcome to Employee Management System</h1>
    <p>Your one-stop solution to manage employee data efficiently and effortlessly.</p>
  </header>

  <section className="features">
    <h2>Key Features</h2>
    <div className="feature-cards">
      <div className="card">
        <h3>Employee Profiles</h3>
        <p>Manage all employee details in one centralized platform.</p>
      </div>
      <div className="card">
        <h3>Attendance & Leave Tracking</h3>
        <p>Keep track of attendance, leaves, and absences seamlessly.</p>
      </div>
      <div className="card">
        <h3>Performance Overview</h3>
        <p>View employee performance metrics and generate reports easily.</p>
      </div>
      <div className="card">
        <h3>Dashboard Analytics</h3>
        <p>Get a quick summary of your team’s statistics in a visual format.</p>
      </div>
    </div>
  </section>

</div>

  )
}

export default Home;