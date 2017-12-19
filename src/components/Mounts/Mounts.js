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

  maxPages = () => Math.ceil((this.state.mounts || []).length / 10);

  render = () => {
    const { mounts, page } = this.state;
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

export default Mounts;
