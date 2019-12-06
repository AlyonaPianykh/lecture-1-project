import React from "react";
import './Toggle.css';

export const Toggle = (props) => {

  const {themeChange, isDarkTheme} = props;

  return (
    <div>
      {isDarkTheme}
      <label>
        <input id="input" type="checkbox" onChange={themeChange}/>
        <span className="check"></span>
      </label>
    </div>
  );
};
