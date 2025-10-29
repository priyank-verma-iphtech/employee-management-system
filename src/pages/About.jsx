import React from 'react'

const About = () => {
  return (
    <div className="about-page">
    <header>
      <h1>About Employee Management System</h1>
    </header>
  
    <section className="mission">
      <h2>Our Mission</h2>
      <p>To provide a seamless and efficient platform for managing employee data and workflows, helping businesses stay organized and productive.</p>
    </section>
  
    <section className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <ul>
        <li>Centralized employee information for quick access</li>
        <li>Easy tracking of performance, attendance, and leaves</li>
        <li>Secure and reliable data handling</li>
        <li>User-friendly interface for all users</li>
      </ul>
    </section>
  
    <section className="how-it-works">
      <h2>How It Works</h2>
      <ol>
        <li>Sign up and add employee details</li>
        <li>Manage employee profiles, attendance, and leaves</li>
        <li>View dashboards and generate reports</li>
      </ol>
    </section>
  </div>
  
  )
}

export default About;