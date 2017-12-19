import React, { Component } from 'react';

import { apiProvider } from 'common';

import Mount from './Mount';

class Mounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounts: undefined,
      page: 0,
    };
  }

  componentWillMount = () => {
    this.load();
  };

  load = () => {
    const request = {
      url: '/mount/',
      method: 'GET',
      data: null,
    };

    const success = ({ mounts }) => {
      this.setState({ mounts });
    };

    const failure = error => {
      console.error('Mounts', error);
    };

    return apiProvider(request)
      .then(success)
      .catch(failure);
  };

  render = () => {
    const { mounts } = this.state;

    return (
      <div>
        <h1>Mounts</h1>
        {!mounts && 'Loading...'}
        {mounts && (
          <div>
            {mounts.map(m => <Mount key={m.itemId} {...m} />)}
          </div>
        )}
      </div>
    );
  };
}

export default Mounts;
