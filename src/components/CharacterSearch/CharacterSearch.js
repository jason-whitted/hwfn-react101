import React from 'react';

import { TextField } from 'common';

const CharacterSearch = () => (
  <div>
    <TextField name="realm" label="Realm:" value="Sargeras" />
    <TextField name="character" label="Character:" value="Stizzasaurus" />
  </div>
);

export default CharacterSearch;
