import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Character, Mounts, RealmStatus } from 'pages';

import Header from './Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <div className="row">
            <Switch>
              <Route exact path="/" component={RealmStatus} />
              <Route exact path="/character" component={Character} />
              <Route exact path="/mounts" component={Mounts} />
              <Route exact path="/realmstatus" component={RealmStatus} />
              <Route render={() => <div>404 - Not found o.O</div>} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
