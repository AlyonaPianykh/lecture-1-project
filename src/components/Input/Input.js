import React from 'react';


export const Input = ({className, value, disabled, onChange }) => {
  return (
    <input
      className={className}
      value={value}
      type="text"
      disabled={disabled}
      onChange={onChange}
    />
  );
};