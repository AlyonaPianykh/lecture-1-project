import React, { Component } from 'react';
import { people } from '../../constants/people';
import { Toogle } from '../Toogle/Toogle';
import { Header } from '../Header/Header';
import Checkbox from '../Checkbox/Checkbox';
import { Input } from '../Input/Input';

import './App.css';

const CN = 'App';

function renderPeopleList() {
  return people.map(person => {
    const { firstName, lastName, avatar, address = 'New York' } = person;

    return (
      <li className="list-item" key={`${firstName} ${lastName}`}>
        <div>{firstName}</div>
        <div>{lastName}</div>
        <img
          src={avatar}
          className="avatar"
          alt={`avatar for ${firstName} ${lastName}`}
        />
        <div>{address}</div>
      </li>
    );
  });
}

class AppTheReal extends Component {
  constructor() {
    super();

    this.greeting = 'Hello, world!';

    this.state = {
      isChecked: false,
      inputValue: '',
      theme: 'light',
    };

    this.onApplyBtnClick = this.onApplyBtnClick.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }


  onApplyBtnClick( themeStyle ) {
    const {theme} = this.state;

    this.setState({
        theme: themeStyle
    });
  }

  onCheck(e) {
    const { isChecked } = this.state;

    this.setState({
      isChecked: !isChecked
    }, () => {
      console.log('state changed');
    });
  }

  onInputChange = (inputValue) => {
    this.setState({
      inputValue
    });
  };

  render() {
    const { isChecked, inputValue, theme } = this.state;
    const greetingElement = (<div className="class-12">{this.greeting}</div>);
    const ThemeOn = theme === 'dark' ? 'dark' : 'light';

    console.log('App render');

    const darkThemeClass = theme === 'dark' && `${CN}__dark`;

    return (
      <div className={`${CN} ${darkThemeClass}`}>
        <Header
          className="App-header"
          showLogo={true}
        >
          <div>this is children of header</div>
        </Header>

        <div>
          {greetingElement}
        </div>

        <Checkbox label="Click me" isChecked={isChecked} onChange={this.onCheck}/>

        <Input value={inputValue} onChange={this.onInputChange}/>
        <div className="divider"/>
        <ul className="list">{renderPeopleList()}</ul>
          <Toogle onHandleFunction={ this.onApplyBtnClick }  ThemeOn={ThemeOn}/>
      </div>
    );
  }
}

export default AppTheReal;
