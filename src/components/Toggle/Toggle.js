import React from "react";
import { Button } from '../Button/Button';
import './Toggle.css';

export const Toggle = (props) => {

  const {themeChange, isDarkThemeOn} = props;

  const darkThemeOnClass = isDarkThemeOn ? 'buttonGreenLeft' : 'buttonGreenRight';


  return (
    <div className={darkThemeOnClass}>
      <Button className='buttonLeft'
        label=""
        onClick={themeChange}
      />
      <Button className='buttonRight'
        label=""
        onClick={themeChange}
      />
    </div>
  );
};
