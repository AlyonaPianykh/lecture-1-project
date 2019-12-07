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

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
      const { onClick,inputValue } = this.props;
      console.log(inputValue);
      onClick && onClick();
  }



  render() {
    const { className = '',
            type = 'button',
            disabled = false,
            label = '',label2 = '',
            onClick2} = this.props;

    return (
  <div>
      <button
          className={`${CN} ${className}`}
          onClick={this.onClick}
          disabled={disabled}
          type={type}
      >
        {label}
      </button>

      <button
          className={`${CN} ${className}`}
          onClick={onClick2}
          disabled={disabled}
          type={type}
      >
          {label2}
      </button>


  </div>
    );
  }
}

