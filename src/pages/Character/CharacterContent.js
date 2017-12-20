import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { apiProvider } from 'common';
import { withMessages, withTotal } from 'hocs';
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
      this.props.add(1);
      if(this.props.total >= 5) {
        alert('You are wasting my apiKey usage.  Go away!');
        document.location.assign('http://worldofwarcraft.com');
      }
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
  // withTotal
  add: PropTypes.func,
  total: PropTypes.number,
};

CharacterContent.defaultProps = {};

export default withMessages()(
  withTotal()(
    CharacterContent
  )
);
