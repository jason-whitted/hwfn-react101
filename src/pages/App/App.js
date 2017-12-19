import React, { Component } from 'react';

import { Character, Mounts, RealmStatus } from 'pages';

const route = () => {
  switch(document.location.pathname) {
    case '/character':
      return <Character />;
    case '/mounts':
      return <Mounts />;
    case '/':
    case '/realmstatus':
      return <RealmStatus />;
    default:
      return <div>404 - Uh oh o.O</div>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>Battle.not</h1>
        </header>
        <div className="row">
          {route()}
        </div>
      </div>
    );
  }
}

export default App;
