import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Dashboard from './Dashboard';
import Ecommerce from './Ecommerce';
import Resume from './Resume';

export default function BasicExample() {
    return (
      <Router>
        <div>
          <Switch>
            {/* <Route exact path="/">
              <ul>
                  <li>
                  <Link to="/">Home</Link>
                  </li>
                  <li>
                  <Link to="/ecommerce">E-Commerce</Link>
                  </li>
                  <li>
                  <Link to="/dashboard">Dashboard</Link>
                  </li>
              </ul>
            </Route> */}
            <Route path="/">
              <Resume />
            </Route>
            <Route path="/ecommerce">
              <Ecommerce />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }