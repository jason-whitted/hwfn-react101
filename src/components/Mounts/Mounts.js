import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { apiProvider } from 'common';
import { withMessages } from 'hocs';

import connectConfig from './connect';
import Mount from './Mount';

class Mounts extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 0 };
  }

  componentWillMount = () => {
    this.load();
  };

  load = () => {
    const failure = error => {
      this.props.addMessage({ text: error.message });
    };

    return this.props.getMounts().catch(failure);
  };

  first = () => {
    this.setState({ page: 0 });
  };

  prev = () => {
    this.setState({ page: Math.max(this.state.page - 1, 0) });
  };

  next = () => {
    this.setState({ page: Math.min(this.state.page + 1, this.maxPages() - 1) })
  };

  last = () => {
    this.setState({ page: this.maxPages() - 1 });
  };

  maxPages = () => Math.ceil((this.props.mounts || []).length / 10);

  render = () => {
    const { mounts } = this.props;
    const { page } = this.state;
    const pages = this.maxPages();
    const paginated = (mounts || []).slice(page * 10, page * 10 + 10)

    return (
      <div>
        <h1>Mounts</h1>
        {!mounts && 'Loading...'}
        {mounts && (
          <div>
            {paginated.map(m => <Mount key={m.itemId} {...m} />)}
            <div className="btn-group">
              <button className="btn btn-default" onClick={this.first}>First</button>
              <button className="btn btn-default" onClick={this.prev}>Prev</button>
              <button className="btn btn-default" disabled>Page {page + 1} / {pages}</button>
              <button className="btn btn-default" onClick={this.next}>Next</button>
              <button className="btn btn-default" onClick={this.last}>Last</button>
            </div>
          </div>
        )}
      </div>
    );
  };
}

Mounts.propTypes = {
  // withMessages
  addMessage: PropTypes.func,
  // connect
  getMounts: PropTypes.func,
  loading: PropTypes.bool,
  mounts: PropTypes.array,
};

Mounts.defaultProps = {};

export default connect(...connectConfig)(
  withMessages()(
    Mounts
  )
);
