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
        return 'Super Administrator Dashboard';
      case 'admin':
        return 'Administrator Dashboard';
      case 'client':
        return 'Customer Dashboard';
      default:
        return 'Dashboard';
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <div className="sidebar-logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M9 9h6v6H9z" />
          </svg>
        </div>
        <nav className="sidebar-nav">
          <div className="nav-item active">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            <span>Dashboard</span>
          </div>
          <div className="nav-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Companies</span>
          </div>
          <div className="nav-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
              <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
            <span>Billing</span>
          </div>
          <div className="nav-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
            <span>Monitoring</span>
          </div>
          <div className="nav-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
            </svg>
            <span>Configuration</span>
          </div>
        </nav>
        <div className="sidebar-logout" onClick={handleLogout}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <span>Log Out aaa</span>
        </div>
      </div>
      <div className="dashboard-main">
        <div className="dashboard-header">
          <h1>{getRoleTitle()}</h1>
        </div>
        <div className="dashboard-content">
          <div className="summary-cards">
            <div className="summary-card">
              <div className="card-icon blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div className="card-content">
                <h3>Total Companies</h3>
                <div className="card-value">3</div>
                <p>Companies registered in the system</p>
              </div>
            </div>
            <div className="summary-card">
              <div className="card-icon green">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <div className="card-content">
                <h3>Active Companies</h3>
                <div className="card-value">2</div>
                <p>Companies with active service</p>
              </div>
            </div>
            <div className="summary-card">
              <div className="card-icon orange">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="card-content">
                <h3>Suspended Companies</h3>
                <div className="card-value">1</div>
                <p>Companies with suspended service</p>
              </div>
            </div>
            <div className="summary-card">
              <div className="card-icon green">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div className="card-content">
                <h3>Monthly Income</h3>
                <div className="card-value">$499.98</div>
                <p>Recurring monthly income</p>
              </div>
            </div>
          </div>
          <div className="dashboard-widgets">
            <div className="widget-card">
              <h2>System Summary</h2>
              <p className="widget-subtitle">General state of operations</p>
              <div className="widget-content">
                <div className="widget-item">
                  <span>Activity Rate</span>
                  <span className="widget-value">67 %</span>
                </div>
                <div className="widget-item">
                  <span>Average Revenue/Company</span>
                  <span className="widget-value">$ 249.99</span>
                </div>
              </div>
            </div>
            <div className="widget-card">
              <h2>Rapid Actions</h2>
              <p className="widget-subtitle">Frequent system actions</p>
              <div className="widget-content">
                <div className="action-link">
                  <strong>Managing Businesses</strong>
                  <p>View and manage all companies</p>
                </div>
                <div className="action-link">
                  <strong>Generate Invoice</strong>
                  <p>Create invoices for businesses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

