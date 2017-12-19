import React, { Component } from 'react';

const withMessages = options => BaseComponent => {
  class WithMessages extends Component {
    addMessage = ({
      className = 'alert alert-danger',
      icon = 'fa fa-fw fa-exclamation-circle',
      text,
    }) => {
      this.message = (
        <div className={className}>
          {icon && <i className={icon} />}
          {text}
        </div>
      );
      this.forceUpdate();

      setTimeout(() => {
        this.message = undefined;
        this.forceUpdate();
      }, 3000);
    };

    render = () => {
      return (
        <div>
          {this.message}
          <BaseComponent addMessage={this.addMessage} {...this.props} />
        </div>
      );
    };
  }

  return WithMessages;
};

export default withMessages;
