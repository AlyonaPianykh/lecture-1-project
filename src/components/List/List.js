import React from 'react';

export const List = (props) => {
  const { options = [], label = 'list label' } = props;
  console.log('render List');
  return (
    <div>
      <div>{label}</div>
      <ul>
        {
          options.map((item, index) => {
            return (
              <li key={index}>{item}</li>
            );
          })
        }
      </ul>
    </div>
  );
};