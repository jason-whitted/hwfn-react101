import React from 'react';
import PropTypes from 'prop-types';

import { withPi } from 'hocs';

const Realm = ({ status, name, type, queue, pi }) => (
  <tr>
    <td>
      <i className={`fa fa-fw fa-arrow-${status ? 'up' : 'down'}`} />
    </td>
    <td>{name} ({pi})</td>
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
  // withPi
  pi: PropTypes.number,
};

Realm.defaultProps = {};

export default withPi({ times: 2 })(
  Realm
);
