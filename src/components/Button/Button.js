import React from 'react';
import './Button.css';

const CN = 'default-btn';

export const Button = (props) => {

  const { onClick, disabled, type= 'button', label = 'btn', className} = props;

  const onClickHandler = () => {
    onClick && onClick();
  };

  return (
    <button
      className={`${CN} ${className}`}
      disabled={disabled}
      type={type}
      onClick={onClickHandler}
    >
      {label}
    </button>
  );
};
