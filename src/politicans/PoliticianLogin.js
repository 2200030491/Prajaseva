import React, { useState } from 'react';
import './PoliticianLogin.css'; // Assuming the CSS is in a separate file

export default function PoliticanLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let isValid = true;
    let errors = {};

    // Email validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
      isValid = false;
    }

    // Password validation
    if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Sign-in form submitted successfully:", formData);
      // Perform sign-in logic
    } else {
      console.log("Validation failed");
    }
  };

  return (
    <div className="signin-form">
      <h2>🔑 Politician Sign-in</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button type="submit" className="signin-btn">Sign In</button>
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
