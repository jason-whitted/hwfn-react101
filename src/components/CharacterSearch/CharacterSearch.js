import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

  onSubmit = event => {
    event.preventDefault();

    const { realm, character } = this.state;
    this.props.submitHandler({ realm, character });
  };

  render = () => {
    const { realm, character } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <TextField name="realm" label="Realm:" value={realm} onChange={this.onChange} />
          <TextField name="character" label="Character:" value={character} onChange={this.onChange} />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  };
}

CharacterSearch.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};

CharacterSearch.defaultProps = {};

export default CharacterSearch;
