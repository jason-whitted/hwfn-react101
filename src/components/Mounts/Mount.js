import React from 'react';
import PropTypes from 'prop-types';

const Mount = ({ name, icon, isFlying, isAquatic, isJumping, isGround }) => (
  <div className="panel panel-default">
    <div className="panel-body">
      <img src={`https://wow.zamimg.com/images/wow/icons/large/${icon}.jpg`}
           alt={name} align="left" />
      <h4>{name}</h4>
      <div>
        {isAquatic && <div className="label label-info">Aquatic</div>}
        {isFlying && <div className="label label-warning">Flying</div>}
        {isGround && <div className="label label-success">Ground</div>}
        {isJumping && <div className="label label-primary">Jumping</div>}
      </div>
    </div>
  </div>
);

Mount.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  isFlying: PropTypes.bool.isRequired,
  isAquatic: PropTypes.bool.isRequired,
  isJumping: PropTypes.bool.isRequired,
  isGround: PropTypes.bool.isRequired,
};

Mount.defaultProps = {};

export default Mount;
