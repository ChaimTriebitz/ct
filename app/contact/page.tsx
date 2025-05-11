"use client";

import React from "react";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="contact-container">
      <section className="contact-hero">
        <h1>Get in Touch</h1>
        <p className="subtitle">
          Let&apos;s work together on your next project
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="info-item">
            <i className="icon-email"></i>
            <div>
              <h3>Email</h3>
              <p>your.email@example.com</p>
            </div>
          </div>
          <div className="info-item">
            <i className="icon-location"></i>
            <div>
              <h3>Location</h3>
              <p>Your City, Country</p>
            </div>
          </div>
          <div className="info-item">
            <i className="icon-social"></i>
            <div>
              <h3>Social</h3>
              <div className="social-links">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
