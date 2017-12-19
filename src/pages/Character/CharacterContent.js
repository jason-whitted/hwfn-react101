import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { apiProvider } from 'common';
import { withMessages } from 'hocs';
import { Character } from 'components/Character';
import { CharacterSearch } from 'components/CharacterSearch';

class CharacterContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: undefined,
    };
  }

  search = values => {
    const { realm, character } = values;

    const request = {
      url: `/character/${realm}/${character}`,
      method: 'GET',
      data: null,
      query: {
        fields: 'guild',
      },
    };

    const success = character => {
      this.setState({ character });
    };

    const failure = error => {
      this.props.addMessage({ text: error.message });
    };

    return apiProvider(request)
      .then(success)
      .catch(failure);
  };

  render = () => {
    const { character } = this.state;

    return (
      <div>
        <div className="col-xs-12 col-lg-4">
          <CharacterSearch submitHandler={this.search} />
        </div>
        <div className="col-xs-12 col-lg-8">
          <Character character={character} />
        </div>
      </div>
    );
  };
}

CharacterContent.propTypes = {
  // withMessages
  addMessage: PropTypes.func,
};

CharacterContent.defaultProps = {};

export default withMessages()(
  CharacterContent
);
