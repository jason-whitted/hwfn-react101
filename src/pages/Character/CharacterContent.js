import React from 'react';

import { Character } from 'components/Character';
import { CharacterSearch } from 'components/CharacterSearch';

const CharacterContent = () => (
  <div>
    <div className="col-xs-12 col-lg-4">
      <CharacterSearch />
    </div>
    <div className="col-xs-12 col-lg-8">
      <Character />
    </div>
  </div>
);

export default CharacterContent;
