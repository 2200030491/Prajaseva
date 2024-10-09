import React, { useState } from 'react';
import './CitizenRegistration.css'; // Assuming the CSS is in a separate file

export default function CitizenRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    aadhaar: '',
    gender: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or validation logic here
    console.log(formData);
  };

  return (
    <div className="registration-form">
      <h2>📝 Citizen Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="aadhaar"
            placeholder="Enter your Aadhaar no"
            value={formData.aadhaar}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="gender"
            placeholder="Male/Female"
            value={formData.gender}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="mobile"
            placeholder="Enter your mobile no"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Set Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Re-enter Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="register-btn">Register</button>
      </form>

      <div className="social-login">
        <p>OR</p>
        <div className="social-icons">
          <button className="google-btn">G</button>
          <button className="facebook-btn">F</button>
          <button className="twitter-btn">T</button>
        </div>
      </div>
    </div>
  );
}
