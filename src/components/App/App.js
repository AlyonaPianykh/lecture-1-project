import React, { Component } from 'react';
import { people } from '../../constants/people';
import { Button } from '../Button/Button';
import { Header } from '../Header/Header';
import { List } from '../List/List';
import { Input } from '../Input/Input';
import { Toggle } from '../Toggle/Toggle';

import './App.css';

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

const CN = 'App';

class AppTheReal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      greeting: 'Hello, robot!',
      characters: ['Iron Man', 'Batman'],
      inputValue: '',
      isDarkTheme: false
    };
    //this.onCancelClick = this.onCancelClick.bind(this);
    this.onThemeChange = this.onThemeChange.bind(this);
  }

  onAddCharacterClick = () => {
    const { characters, inputValue } = this.state;

    const newCharacters = [...characters];
    newCharacters.push(inputValue);

    this.setState({
      characters: newCharacters,
      inputValue: ''
    });
  };

  onThemeChange() {
    const {isDarkTheme} = this.state;

    this.setState({
      isDarkTheme: !isDarkTheme
    });
  }

  onInputChange = (event) => {
    const {value: inputValue} = event.target;

    console.log(inputValue);
    this.setState({
      inputValue
    })
  };

  renderActionsBlock() {
    const { isDarkTheme } = this.state;
    return (
      <div className="actions-block">
        <Button
          label="Add Character"
          onClick={this.onAddCharacterClick}
        />
        <Toggle themeChange={this.onThemeChange} isDarkThemeOn={isDarkTheme}/>
      </div>
    );
  }

  render() {
    const { inputValue, isDarkTheme, characters } = this.state;
    const darkThemeCN = isDarkTheme ? `${CN}--dark` : '';

    return (
      <div className={`${CN} ${darkThemeCN}`}>
        <Header
          className="App-header"
          showLogo={true}
        >
          <div>this is children of header</div>
        </Header>


        <List options={characters}/>

        <div className="divider"/>
        <ul className="list">{renderPeopleList()}</ul>


        <Input value={inputValue} onChange={this.onInputChange}/>
        {this.renderActionsBlock()}
      </div>
    );
  }
}

export default AppTheReal;
