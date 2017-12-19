import React, { Component } from 'react';

import { apiProvider } from 'common';

class Mounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounts: undefined,
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
            {mounts.map(({ name, icon, isFlying, isAquatic, isJumping, isGround }) => (
              <div className="panel">
                <div className="panel-body">
                  <img src={`https://wow.zamimg.com/images/wow/icons/large/${icon}.jpg`}
                       alt={name} />
                </div>
              </div>
            ))}
          </div>
        )}
        <pre>{JSON.stringify(mounts, null, 2)}</pre>
      </div>
    );
  };
}

export default Mounts;
