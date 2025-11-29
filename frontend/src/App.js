import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/superadmin/login" render={(props) => <Login {...props} role="superadmin" />} />
          <Route exact path="/admin/login" render={(props) => <Login {...props} role="admin" />} />
          <Route exact path="/client/login" render={(props) => <Login {...props} role="client" />} />
          <Route exact path="/superadmin" render={(props) => <Dashboard {...props} role="superadmin" />} />
          <Route exact path="/admin" render={(props) => <Dashboard {...props} role="admin" />} />
          <Route exact path="/client" render={(props) => <Dashboard {...props} role="client" />} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
