import React from 'react'

const ContactUs = () => {
  return (
    <div className="contact-page">
    <header>
      <h1>Contact Us</h1>
      <p>We are here to help you. Reach out to us anytime.</p>
    </header>
  
    <section className="contact-info">
      <h2>Contact Details</h2>
      <p>Email: support@ems.com</p>
      <p>Phone: +91 987654XXXX</p>
      <p>Address: 123, Business Street, City, Country</p>
    </section>
  
    <section className="contact-form">
      <h2>Send Us a Message</h2>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Your Name" />
  
        <label>Email:</label>
        <input type="email" placeholder="Your Email" />
  
        <label>Subject:</label>
        <input type="text" placeholder="Subject" />
  
        <label>Message:</label>
        <textarea placeholder="Your Message"></textarea>
  
        <button type="submit">Submit</button>
      </form>
    </section>
  </div>
  
  )
}

export default ContactUs;