import React, { Component } from 'react';

const withTotal = options => BaseComponent => {
  class WithTotal extends Component {
    constructor(props) {
      super(props);
      this.state = {
        total: 0,
      };
    }

    add = x => {
      const total = this.state.total + x;
      this.setState({ total });
    };

    render = () => {
      const { total } = this.state;

      return (
        <BaseComponent add={this.add} total={total} {...this.props} />
      );
    };
  }

  return WithTotal;
};

export default withTotal;
