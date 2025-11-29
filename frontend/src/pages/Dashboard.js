import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Dashboard.css';

function Dashboard({ role }) {
  const history = useHistory();
  const [trackingNumber, setTrackingNumber] = useState('');

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
        return 'My Dashboard';
      default:
        return 'Dashboard';
    }
  };

  const handleTrackShipment = () => {
    if (trackingNumber.trim()) {
      // Handle tracking logic here
      console.log('Tracking:', trackingNumber);
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
          {role === 'client' ? (
            <>
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
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>Pre-Alerts</span>
              </div>
              <div className="nav-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 9h6v6H9z" />
                </svg>
                <span>My Shipments</span>
              </div>
              <div className="nav-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
                <span>Invoices</span>
              </div>
              <div className="nav-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                  <line x1="7" y1="2" x2="7" y2="6" />
                  <line x1="17" y1="2" x2="17" y2="6" />
                </svg>
                <span>Payments</span>
              </div>
              <div className="nav-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
                </svg>
                <span>Configuration</span>
              </div>
              <div className="nav-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="4" y="2" width="16" height="20" rx="2" />
                  <line x1="8" y1="6" x2="16" y2="6" />
                  <line x1="8" y1="10" x2="16" y2="10" />
                  <line x1="8" y1="14" x2="14" y2="14" />
                </svg>
                <span>Calculator</span>
              </div>
            </>
          ) : (
            <>
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
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
                <span>Shipping</span>
              </div>
              <div className="nav-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
                <span>Dispatch Guide</span>
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
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span>Users</span>
              </div>
              <div className="nav-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                  <line x1="7" y1="2" x2="7" y2="6" />
                  <line x1="17" y1="2" x2="17" y2="6" />
                </svg>
                <span>Accounts</span>
              </div>
              <div className="nav-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>Activities</span>
              </div>
              <div className="nav-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
                <span>Reports</span>
              </div>
              <div className="nav-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
                </svg>
                <span>Configuration</span>
              </div>
              <div className="nav-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="4" y="2" width="16" height="20" rx="2" />
                  <line x1="8" y1="6" x2="16" y2="6" />
                  <line x1="8" y1="10" x2="16" y2="10" />
                  <line x1="8" y1="14" x2="14" y2="14" />
                </svg>
                <span>Calculator</span>
              </div>
              <div className="nav-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 3h12l4 6-4 6H6l-4-6z" />
                  <path d="M11 11l1-4 1 4" />
                  <path d="M8 11h6" />
                </svg>
                <span>Membership</span>
              </div>
            </>
          )}
        </nav>
        <div className="sidebar-logout" onClick={handleLogout}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <span>Log Out</span>
        </div>
      </div>
      <div className="dashboard-main">
        <div className="dashboard-header">
          <div className="header-left">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M9 9h6v6H9z" />
            </svg>
            <h1>{getRoleTitle()}</h1>
          </div>
          <div className="header-right">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </div>
        </div>
        <div className="dashboard-content">
          <div className="summary-cards">
            {role === 'client' ? (
              <>
                <div className="summary-card">
                  <div className="card-icon blue">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M9 9h6v6H9z" />
                    </svg>
                  </div>
                  <div className="card-content">
                    <h3>My Shipments</h3>
                    <div className="card-value">0</div>
                    <p>Total shipments made</p>
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
                    <h3>Active Shipments</h3>
                    <div className="card-value">0</div>
                    <p>In transit or customs</p>
                  </div>
                </div>
                <div className="summary-card">
                  <div className="card-icon orange">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                      <line x1="1" y1="10" x2="23" y2="10" />
                    </svg>
                  </div>
                  <div className="card-content">
                    <h3>Outstanding Invoices</h3>
                    <div className="card-value">0</div>
                    <p>To pay</p>
                  </div>
                </div>
                <div className="summary-card">
                  <div className="card-icon green">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="card-content">
                    <h3>Total Invested</h3>
                    <div className="card-value">$0.00</div>
                    <p>Total shipping costs</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="summary-card">
                  <div className="card-icon blue">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                    </svg>
                  </div>
                  <div className="card-content">
                    <h3>Total Shipments</h3>
                    <div className="card-value">0</div>
                    <p>Registered shipments</p>
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
                    <h3>Active Shipments</h3>
                    <div className="card-value">0</div>
                    <p>Currently in transit</p>
                  </div>
                </div>
                <div className="summary-card">
                  <div className="card-icon purple">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div className="card-content">
                    <h3>Customers</h3>
                    <div className="card-value">2</div>
                    <p>Registered customers</p>
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
                    <h3>Income</h3>
                    <div className="card-value">$0.00</div>
                    <p>Total billed and paid</p>
                  </div>
                </div>
              </>
            )}
          </div>
          {role === 'client' ? (
            <>
              <div className="track-shipment-section">
                <div className="track-shipment-card">
                  <div className="track-shipment-header">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.35-4.35" />
                    </svg>
                    <h2>Track Shipment</h2>
                  </div>
                  <p className="track-shipment-description">
                    Enter the tracking number to view the status and location of your shipment in real time.
                  </p>
                  <div className="track-shipment-input-group">
                    <input
                      type="text"
                      className="track-shipment-input"
                      placeholder="Enter tracking number..."
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleTrackShipment()}
                    />
                    <button className="track-shipment-button" onClick={handleTrackShipment}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                      </svg>
                      <span>Track</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="dashboard-widgets">
                <div className="widget-card">
                  <h2>Recent Shipments</h2>
                  <p className="widget-subtitle">Your latest recorded shipments</p>
                  <div className="empty-state">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M9 9h6v6H9z" />
                    </svg>
                    <p>It has no registered shipments.</p>
                  </div>
                </div>
                <div className="widget-card">
                  <h2>Rapid Actions</h2>
                  <p className="widget-subtitle">Frequent actions</p>
                  <div className="rapid-actions-list">
                    <div className="rapid-action-item">
                      <div className="rapid-action-item-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                      </div>
                      <div className="rapid-action-item-content">
                        <strong>Create Pre-Alert</strong>
                        <p>Notify me of a new shipment</p>
                      </div>
                    </div>
                    <div className="rapid-action-item">
                      <div className="rapid-action-item-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <path d="M9 9h6v6H9z" />
                        </svg>
                      </div>
                      <div className="rapid-action-item-content">
                        <strong>Track Shipments</strong>
                        <p>Check the status of your packages</p>
                      </div>
                    </div>
                    <div className="rapid-action-item highlighted">
                      <div className="rapid-action-item-icon purple">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="4" y="2" width="16" height="20" rx="2" />
                          <line x1="8" y1="6" x2="16" y2="6" />
                          <line x1="8" y1="10" x2="16" y2="10" />
                          <line x1="8" y1="14" x2="14" y2="14" />
                        </svg>
                      </div>
                      <div className="rapid-action-item-content">
                        <strong>Calculate Shipping</strong>
                        <p>Get a quote for your shipping costs</p>
                      </div>
                    </div>
                    <div className="rapid-action-item">
                      <div className="rapid-action-item-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                          <line x1="1" y1="10" x2="23" y2="10" />
                        </svg>
                      </div>
                      <div className="rapid-action-item-content">
                        <strong>View Invoices</strong>
                        <p>Review your invoices</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="dashboard-widgets">
                <div className="widget-card">
                  <h2>Recent Notifications</h2>
                  <p className="widget-subtitle">Important alerts and notifications</p>
                  <div className="empty-state">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                    <p>No notifications</p>
                  </div>
                </div>
                <div className="widget-card">
                  <h2>Customer Activity</h2>
                  <p className="widget-subtitle">Recent actions of your clients</p>
                  <div className="empty-state">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                    <p>There is no recent activity.</p>
                  </div>
                </div>
              </div>
              <div className="dashboard-widgets">
                <div className="widget-card">
                  <h2>Shipping Summary</h2>
                  <p className="widget-subtitle">Company shipment status</p>
                  <div className="widget-content">
                    <div className="widget-item">
                      <span>Delivered</span>
                      <span className="widget-value">0</span>
                    </div>
                    <div className="widget-item">
                      <span>Delivery Rate</span>
                      <span className="widget-value">0 %</span>
                    </div>
                  </div>
                </div>
                <div className="widget-card">
                  <h2>Billing</h2>
                  <p className="widget-subtitle">Invoice status</p>
                  <div className="widget-content">
                    <div className="widget-item">
                      <span>Outstanding Invoices</span>
                      <span className="widget-value">0</span>
                    </div>
                    <div className="widget-item">
                      <span>Collection Rate</span>
                      <span className="widget-value">0 %</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rapid-actions-section">
                <h2>Rapid Actions</h2>
                <p className="widget-subtitle">Frequent management actions</p>
                <div className="rapid-actions-grid">
                  <div className="rapid-action-card">
                    <div className="rapid-action-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M9 9h6v6H9z" />
                      </svg>
                    </div>
                    <h3>Manage Shipments</h3>
                    <p>Create and manage shipments</p>
                  </div>
                  <div className="rapid-action-card">
                    <div className="rapid-action-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="16" rx="2" />
                        <line x1="7" y1="8" x2="17" y2="8" />
                        <line x1="7" y1="12" x2="17" y2="12" />
                        <line x1="7" y1="16" x2="14" y2="16" />
                      </svg>
                    </div>
                    <h3>Billing</h3>
                    <p>Generate invoices</p>
                  </div>
                  <div className="rapid-action-card">
                    <div className="rapid-action-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <h3>Users</h3>
                    <p>Manage clients</p>
                  </div>
                  <div className="rapid-action-card">
                    <div className="rapid-action-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="1" x2="12" y2="23" />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </div>
                    <h3>Accounts</h3>
                    <p>Accounts receivable/payable</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

