import React, { Component } from 'react';

import { Character } from 'pages';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>Battle.not</h1>
        </header>
        <Character />
      </div>
    );
  }
}

export default App;
