import React, { Component } from 'react';

import { Character, Mounts, RealmStatus } from 'pages';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>Battle.not</h1>
        </header>
        <div className="row">
          <Mounts />
        </div>
      </div>
    );
  }
}

export default App;
