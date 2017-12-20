import React from 'react';

const withPi = ({ times = 1 } = {}) => BaseComponent =>
  props => <BaseComponent pi={Math.PI * times} {...props} />

export default withPi;
