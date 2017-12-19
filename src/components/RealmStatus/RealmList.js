import React from 'react';
import PropTypes from 'prop-types';

import Realm from './Realm';

const RealmList = ({ realms }) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Status</th>
        <th>Realm</th>
        <th>Type</th>
        <th>Queue</th>
      </tr>
    </thead>
    <tbody>
      {realms.map(r => <Realm key={r.name} {...r} />)}
    </tbody>
  </table>
);

RealmList.propTypes = {
  realms: PropTypes.array.isRequired,
};

RealmList.defaultProps = {};

export default RealmList;
