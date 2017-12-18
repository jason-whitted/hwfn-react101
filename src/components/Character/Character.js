import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ character }) => {
  const { guild, name, realm, thumbnail } = character || {};
  const { name: guildName } = guild || {};

  return (
    <div>
      {character && (
        <div>
          <h1>{realm} - {name}</h1>
          <h4>&lt;{guildName}&gt;</h4>
          <img className="img-thumbnail"
               src={`https://render-us.worldofwarcraft.com/character/${thumbnail}`}
               alt={name} />
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
