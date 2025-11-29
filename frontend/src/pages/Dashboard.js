import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Dashboard.css';

function Dashboard({ role }) {
  const history = useHistory();

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem(`${role}_authenticated`);
    if (!isAuthenticated) {
      history.push(`/${role}/login`);
    }
  }, [role, history]);

  const handleLogout = () => {
    localStorage.removeItem(`${role}_authenticated`);
    history.push('/');
  };

  const getRoleTitle = () => {
    switch(role) {
      case 'superadmin':
        return 'Super Admin Dashboard';
      case 'admin':
        return 'Administrator Dashboard';
      case 'client':
        return 'Customer Dashboard';
      default:
        return 'Dashboard';
    }
  };

  const getRoleDescription = () => {
    switch(role) {
      case 'superadmin':
        return 'Full system access and control panel';
      case 'admin':
        return 'Administrative management and operations';
      case 'client':
        return 'Customer portal and services';
      default:
        return 'Dashboard';
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="dashboard-title">
          <h1>{getRoleTitle()}</h1>
          <p>{getRoleDescription()}</p>
        </div>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-card">
          <h2>Welcome!</h2>
          <p>You have successfully logged in as {getRoleTitle().replace(' Dashboard', '')}.</p>
          <p>This is your dashboard where you can manage your account and access various features.</p>
        </div>
        <div className="dashboard-card">
          <h2>Quick Actions</h2>
          <div className="actions-grid">
            <div className="action-item">View Profile</div>
            <div className="action-item">Settings</div>
            <div className="action-item">Reports</div>
            <div className="action-item">Help & Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

