import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Login from './pages/Login'
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Container from './pages/Container';
import Template from './pages/Template';
import Staff from './pages/Staff';
import UsersCreate from './pages/UsersCreate';
import UserDetail from './pages/UserDetail'
import ContainerCreate from './pages/ContainerCreate';
import ContainerDetail from './pages/ContainerDetail';
import TemplateCreate from './pages/TemplateCreate'
import TemplateDetail from './pages/TemplateDetail'

// redux
import { Provider } from 'react-redux'
import configureStore from './store/config'
export const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar/>

            <div className="container-fluid">
              <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <div className="mr-t-10"></div>
                  <Switch>
                    <Route exact path="/login" component={Login} />

                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/users" component={Staff} />
                    <Route exact path="/users/create" component={UsersCreate} />
                    <Route exact path="/users/detail/:id" component={UserDetail} />

                    <Route exact path="/containers" component={Container} />
                    <Route exact path="/containers/create" component={ContainerCreate} />
                    <Route exact path="/containers/detail/:id" component={ContainerDetail} />

                    <Route exact path="/templates" component={Template} />
                    <Route exact path="/templates/create" component={TemplateCreate} />
                    <Route exact path="/templates/detail/:id" component={TemplateDetail} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
