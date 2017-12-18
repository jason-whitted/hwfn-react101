import React, { Component } from 'react';

import { Character, RealmStatus } from 'pages';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>Battle.not</h1>
        </header>
        <div className="row">
          <RealmStatus />
        </div>
      </div>
    );
  }
}

export default App;
