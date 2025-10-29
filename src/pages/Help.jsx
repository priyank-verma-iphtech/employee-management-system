import React from 'react'
import { Link } from 'react-router-dom';

const Help = () => {
  return (
    
    <div className="help-page">
  <header>
    <h1>Help & Support</h1>
    <p>Find answers to common questions and get guidance on using the system.</p>
  </header>

  <section className="faq">
    <h2>Frequently Asked Questions</h2>
    <ul>
      <li><strong>Q:</strong> How do I sign up?<br /><strong>A:</strong> Click on the Sign Up button and fill in your details.</li>
      <li><strong>Q:</strong> How do I reset my password?<br /><strong>A:</strong> Use the 'Forgot password?' link on the login page.</li>
      <li><strong>Q:</strong> How do I add or edit employee details?<br /><strong>A:</strong> Go to the Dashboard and select the employee section to manage profiles.</li>
      <li><strong>Q:</strong> How do I generate reports?<br /><strong>A:</strong> Use the Dashboard analytics section to view and download reports.</li>
    </ul>
  </section>

  <section className="tips">
    <h2>Tips</h2>
    <ul>
      <li>Keep employee data updated for accurate reporting.</li>
      <li>Use strong passwords to secure your account.</li>
      <li>Regularly check the dashboard for performance metrics.</li>
    </ul>
  </section>

  <section className="support-links">
    <p>Still need help? <Link to="/contactUs">Contact Us</Link></p>
  </section>
</div>

  )
}

export default Help;