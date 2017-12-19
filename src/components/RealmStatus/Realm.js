import React from 'react';
import PropTypes from 'prop-types';

const Realm = ({ status, name, type, queue }) => (
  <tr>
    <td>
      <i className={`fa fa-fw fa-arrow-${status ? 'up' : 'down'}`} />
    </td>
    <td>{name}</td>
    <td>{type}</td>
    <td>
      <i className={`fa fa-fw fa-thumbs-${queue ? 'down' : 'o-up'}`} />
    </td>
  </tr>
);

Realm.propTypes = {
  status: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  queue: PropTypes.bool.isRequired,
};

Realm.defaultProps = {};

export default Realm;
