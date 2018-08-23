import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Container from './pages/Container';
import Template from './pages/Template';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>

          <div className="container-fluid">
            <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="mr-t-10"></div>
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/containers" component={Container} />
                  <Route exact path="/templates" component={Template} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
