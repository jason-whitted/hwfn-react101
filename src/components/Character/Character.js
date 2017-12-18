import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ character }) => (
  <div>
    Character
    <pre>{JSON.stringify(character, null, 2)}</pre>
  </div>
);

Character.propTypes = {
  character: PropTypes.object,
};

Character.defaultProps = {
  character: undefined,
};

export default Character;
