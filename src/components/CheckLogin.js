import React, { Component } from 'react';
import createHistory from 'history/createHashHistory';
import { Redirect } from 'react-router-dom'
const history = createHistory()

class CheckLogin extends Component {
  state = {
    loged: false
  }

  componentDidMount() {
    // const location = history.location
    // Lắng nghe router thay đổi
  }

  render() {
    history.listen((location, action) => {
      // console.log(action, location.pathname, location.state)
      if (!this.state.loged && location.pathname != '/login') {
        return <Redirect to="/login"/>
      }
    })

    return (
      <div></div>
    );
  }
}

export default CheckLogin;
