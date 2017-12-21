import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { apiProvider, TextField } from 'common';
import { withMessages } from 'hocs';

import connectConfig from './connect';
import RealmList from './RealmList';

class RealmStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    };
  }

  componentWillMount = () => {
    this.load();
  };

  load = () => {
    const failure = error => {
      this.props.addMessage({ text: error.message });
    };

    this.props.getRealmStatus().catch(failure);
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({
      filter: value,
    });
  };

  render = () => {
    const { statuses } = this.props;
    const { filter } = this.state;
    const filtered = (statuses || []).filter(r => r.name.toLowerCase().includes((filter || '').toLowerCase()));

    return (
      <div>
        <TextField name="filter" label="Filter:" value={filter} onChange={this.onChange} />
        {!statuses && 'Loading...'}
        {statuses && (
          <div>
            <RealmList realms={filtered} />
            <pre>{JSON.stringify(statuses, null, 2)}</pre>
          </div>
        )}
      </div>
    );
  };
}

RealmStatus.propTypes = {
  // connect
  getRealmStatus: PropTypes.func,
  loading: PropTypes.bool,
  statuses: PropTypes.array,
};

RealmStatus.defaultProps = {};

export default connect(...connectConfig)(
  withMessages()(
    RealmStatus
  )
);
