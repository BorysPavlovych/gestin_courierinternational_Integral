import React from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';

function Home() {
  const history = useHistory();

  const handleAccess = (role) => {
    if (role === 'superadmin') {
      history.push('/superadmin/login');
    } else if (role === 'admin') {
      history.push('/admin/login');
    } else if (role === 'client') {
      history.push('/client/login');
    }
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Welcome to Gestin</h1>
        <p>Select your role to access the system</p>
      </div>
      <div className="roles-container">
        <div className="role-card">
          <h2>Super Admin</h2>
          <p>Full system access and control</p>
          <button 
            className="access-button"
            onClick={() => handleAccess('superadmin')}
          >
            Access
          </button>
        </div>
        <div className="role-card">
          <h2>Administrator</h2>
          <p>Administrative access and management</p>
          <button 
            className="access-button"
            onClick={() => handleAccess('admin')}
          >
            Access
          </button>
        </div>
        <div className="role-card">
          <h2>Customer</h2>
          <p>Customer portal access</p>
          <button 
            className="access-button"
            onClick={() => handleAccess('client')}
          >
            Access
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

