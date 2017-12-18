import React, { Component } from 'react';

import { TextField } from 'common';

class RealmStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    };
  }

  onChange = event => {
    const { value } = event.target;
    this.setState({
      filter: value,
    });
  };

  render = () => {
    const { filter } = this.state;

    return (
      <div>
        <TextField name="filter" label="Filter:" value={filter} onChange={this.onChange} />
      </div>
    );
  };
}

export default RealmStatus;
