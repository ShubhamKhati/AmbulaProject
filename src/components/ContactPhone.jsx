/*ContactPhone:

Description: Renders a contact form component.
Functionality: Provides a form for users to enter their name, email, and enquiry message. */

import React from 'react'
import './ContactPhone.css'
function ContactPhone() {
    
  return (
    <div className='main-container'>

<div className="contact-form-container">
    <h2>Contact Us</h2>
    <form>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="enquiry">Enquiry:</label>
        <textarea id="enquiry" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>

    </div>
    
  )
}

export default ContactPhone