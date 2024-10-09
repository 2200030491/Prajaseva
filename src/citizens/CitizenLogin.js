import React, { useState } from 'react';
import './CitizenLogin.css'; // Assuming you will have a separate CSS file for styling

const CitizenLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('citizen');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    // Handle form submission logic (API call or other logic)
    console.log({
      email,
      password,
      role,
      rememberMe,
    });

    // You can reset the form if needed
    setEmail('');
    setPassword('');
    setRole('citizen');
    setRememberMe(false);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome to Praja Seva</h2>
        <h3>Sign in</h3>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email"  style={{textAlign:"left"}}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password" style={{textAlign:"left"}}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="remember-forgot">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />{' '}
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="btn-primary">Sign in</button>
        </form>

        <p>Don't have an account? <a href="citizenregistration">Sign up</a></p>

        <div className="divider">OR</div>

        <div className="social-login">
          <button className="social-btn google">G</button>
          <button className="social-btn facebook">f</button>
          <button className="social-btn apple"></button>
        </div>
      </div>
    </div>
  );
};

export default CitizenLogin;
