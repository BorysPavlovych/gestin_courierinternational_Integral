import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';

function Login({ role }) {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const credentials = {
    superadmin: {
      email: 'superadmin@courier.com',
      password: 'Super123!',
      redirect: '/superadmin'
    },
    admin: {
      email: 'admin@express.com',
      password: 'Admin123!',
      redirect: '/admin'
    },
    client: {
      email: 'client1@email.com',
      password: 'Client123!',
      redirect: '/client'
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const creds = credentials[role];
    if (!creds) {
      setError('Invalid role');
      return;
    }

    if (email === creds.email && password === creds.password) {
      // Store authentication in localStorage
      localStorage.setItem(`${role}_authenticated`, 'true');
      history.push(creds.redirect);
    } else {
      setError('Invalid email or password');
    }
  };

  const getRoleTitle = () => {
    switch(role) {
      case 'superadmin':
        return 'Super Admin';
      case 'admin':
        return 'Administrator';
      case 'client':
        return 'Customer';
      default:
        return 'Login';
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>{getRoleTitle()} Login</h1>
          <p>Please enter your credentials to continue</p>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <button 
          className="back-button"
          onClick={() => history.push('/')}
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default Login;

