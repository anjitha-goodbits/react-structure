import React, {Component} from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Page1 from '../pages/Page1'

class AppRoute extends Component {
    render() {
        return (
          <Router>
            <Switch>
              <Route exact path="/" component = {Page1} />
            </Switch>
          </Router>
        )
    }
}

export default AppRoute;