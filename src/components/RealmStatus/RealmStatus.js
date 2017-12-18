import React, { Component } from 'react';

import { apiProvider, TextField } from 'common';

class RealmStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      realms: undefined,
    };
  }

  componentWillMount = () => {
    const request = {
      url: '/realm/status',
      method: 'GET',
      data: null,
    };

    const success = ({ realms }) => {
      this.setState({ realms });
    };

    const failure = error => {
      console.error('RealmStatus', error);
    };

    return apiProvider(request)
      .then(success)
      .catch(failure);
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({
      filter: value,
    });
  };

  render = () => {
    const { filter, realms } = this.state;

    return (
      <div>
        <TextField name="filter" label="Filter:" value={filter} onChange={this.onChange} />
        {!realms && 'Loading...'}
        {realms && (
          <div>
            <pre>{JSON.stringify(realms, null, 2)}</pre>
          </div>
        )}
      </div>
    );
  };
}

export default RealmStatus;
