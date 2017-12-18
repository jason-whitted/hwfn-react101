import React, { Component } from 'react';

import { TextField } from 'common';

class CharacterSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      realm: 'Sargeras',
      character: 'Stizzasaurus',
    };
  }

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render = () => {
    const { realm, character } = this.state;

    return (
      <div>
        <TextField name="realm" label="Realm:" value={realm} onChange={this.onChange} />
        <TextField name="character" label="Character:" value={character} onChange={this.onChange} />
      </div>
    );
  };
}

export default CharacterSearch;
