import React, { Component } from 'react';

import { Character } from 'components/Character';
import { CharacterSearch } from 'components/CharacterSearch';

class CharacterContent extends Component {
  search = values => {
    console.log('CharacterContent', 'search', values);
  };

  render = () => {
    return (
      <div>
        <div className="col-xs-12 col-lg-4">
          <CharacterSearch submitHandler={this.search} />
        </div>
        <div className="col-xs-12 col-lg-8">
          <Character />
        </div>
      </div>
    );
  };
}

export default CharacterContent;
