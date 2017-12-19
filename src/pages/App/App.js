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
          {document.location.pathname === '/character' && <Character />}
          {document.location.pathname === '/mounts' && <Mounts />}
          {document.location.pathname === '/realmstatus' && <RealmStatus />}
        </div>
      </div>
    );
  }
}

export default App;
