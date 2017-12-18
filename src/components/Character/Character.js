import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ character }) => {
  const { name, realm, thumbnail } = character || {};

  return (
    <div>
      {character && (
        <div>
          <h1>{realm} - {name}</h1>
          <img src={`https://render-us.worldofwarcraft.com/character/${thumbnail}`} alt={name}/>
          <pre>{JSON.stringify(character, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

Character.propTypes = {
  character: PropTypes.object,
};

Character.defaultProps = {
  character: undefined,
};

export default Character;
