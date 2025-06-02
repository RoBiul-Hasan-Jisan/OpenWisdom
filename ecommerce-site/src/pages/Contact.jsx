import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const validateEmail = (email) => {
    // Basic regex for email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.inquiryType) newErrors.inquiryType = 'Please select an inquiry type';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors(prevErrors => ({ ...prevErrors, [e.target.name]: null })); // clear error on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus('');
      return;
    }

    setStatus('Sending your message...');

    try {
      // Simulating API call with a delay
      await new Promise(res => setTimeout(res, 1500));

      // Simulate success response from backend
      setStatus('');
      setModalOpen(true);

      // Clear form
      setFormData({
        name: '',
        email: '',
        inquiryType: '',
        subject: '',
        message: '',
      });
      setErrors({});
    } catch (error) {
      setStatus('Oops! Something went wrong. Please try again later.');
    }
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div className="contact-container">
      <h2>Contact Our Bookstore</h2>
      <p>Questions? Recommendations? Let us know how we can help.</p>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Name <span className="required">*</span></label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby="name-error"
        />
        {errors.name && <p className="error-message" id="name-error">{errors.name}</p>}

        <label htmlFor="email">Email <span className="required">*</span></label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby="email-error"
        />
        {errors.email && <p className="error-message" id="email-error">{errors.email}</p>}

        <label htmlFor="inquiryType">Type of Inquiry <span className="required">*</span></label>
        <select
          id="inquiryType"
          name="inquiryType"
          value={formData.inquiryType}
          onChange={handleChange}
          aria-invalid={errors.inquiryType ? 'true' : 'false'}
          aria-describedby="inquiry-error"
        >
          <option value="" disabled>-- Please choose an option --</option>
          <option value="order">Order Question</option>
          <option value="recommendation">Book Recommendation</option>
          <option value="technical">Technical Support</option>
          <option value="other">Other</option>
        </select>
        {errors.inquiryType && <p className="error-message" id="inquiry-error">{errors.inquiryType}</p>}

        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject (optional)"
          value={formData.subject}
          onChange={handleChange}
        />

        <label htmlFor="message">Message <span className="required">*</span></label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message here..."
          rows="5"
          value={formData.message}
          onChange={handleChange}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby="message-error"
        ></textarea>
        {errors.message && <p className="error-message" id="message-error">{errors.message}</p>}

        <button type="submit" className="btn-submit">Send Message</button>
      </form>

      {status && <p className="status-message">{status}</p>}

      <div className="contact-info">
        <h3>Visit Us or Contact Directly</h3>
        <p>Email: support@openwisdom.com</p>
        <p>Phone: 01843300774</p>
        <p>Address: 456 Book Lane, Reading City, BD</p>
        <p>Open: Mon-Fri, 9am - 6pm</p>
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>Message Sent</h2>
            <p>Thank you for reaching out! We'll get back to you soon.</p>
            <button onClick={closeModal} className="btn-close-modal">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
