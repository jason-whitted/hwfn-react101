import React from 'react';
import PropTypes from 'prop-types';

const Thing = ({ increment }) => (
  <div>
    <h1>Thing (by {increment})</h1>
    <div>
      <label>Count:</label>
    </div>
    <button className="btn btn-default">
      Add
    </button>
  </div>
);

Thing.propTypes = {
  increment: PropTypes.number,
}

Thing.defaultProps = {
  increment: 1,
};

export default Thing;
