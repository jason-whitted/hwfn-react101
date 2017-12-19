import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withMessages, withTotal } from 'hocs';

class Thing extends Component {
  componentWillMount = () => {
    this.props.addMessage({
      type: 'alert alert-success',
      icon: 'fa fa-fw fa-thumbs-up',
      text: `Created a Thing (by ${this.props.increment})`,
    });
  };

  click = event => {
    const { add, increment } = this.props;
    add(increment);
  };

  render = () => {
    const { increment, total } = this.props;

    return (
      <div>
        <h1>Thing (by {increment})</h1>
        <div>
          <label>Count:</label>
          <span>{total}</span>
        </div>
        <button className="btn btn-default" onClick={this.click}>
          Add
        </button>
      </div>
    );
  };
}


Thing.propTypes = {
  increment: PropTypes.number,
  // withTotal
  add: PropTypes.func,
  total: PropTypes.number,
  // withMessages
  addMessage: PropTypes.func,
}

Thing.defaultProps = {
  increment: 1,
};

export default withTotal()(
  withMessages()(
    Thing
  )
);
