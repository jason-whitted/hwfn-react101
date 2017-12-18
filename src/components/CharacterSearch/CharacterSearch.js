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

  submitHandler = event => {
    console.log('CharacterSearch', 'submitHandler', event);
    event.preventDefault();
  }

  render = () => {
    const { realm, character } = this.state;

    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <TextField name="realm" label="Realm:" value={realm} onChange={this.onChange} />
          <TextField name="character" label="Character:" value={character} onChange={this.onChange} />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  };
}

export default CharacterSearch;
