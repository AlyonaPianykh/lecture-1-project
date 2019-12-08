import React, { Component } from 'react';
import './Button.css';
// const Button = (props) => {
//
//
// };
const CN = 'default-btn';

export class Button extends Component {
  constructor(props) {
    super(props);

    // this.onClick = this.onClick.bind(this);
  }

  // onClick() {
  //       const { onClick,inputValue } = this.props;
  //       console.log(inputValue);
  //       onClick && onClick();
  //   }

  render() {
    const { className = '',
            type = 'button',
            disabled = false,
            label = '',} = this.props;

    return (
      <button
          className={`${CN} ${className}`}
          onClick={this.props.onClick}
          disabled={disabled}
          type={type}
      >
        {label}
      </button>
    );
  }
}

