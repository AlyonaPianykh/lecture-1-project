import React, { Component } from 'react';
import { Button as Button } from '../Button/Button';
import { Header } from '../Header/Header';

import { Form } from '../Form/Form';
import './App.css';

const CN = 'App';

class AppTheReal extends Component {
  constructor() {
    super();

    this.greeting = 'Hello, world!';

    this.state = {
      isDarkTheme: false,
      showSuccess: false
    };

    this.onApplyBtnClick = this.onApplyBtnClick.bind(this);
  }

  renderActionsBlock() {
    return (
      <div className="actions-block">
        <Button
          label="Cancel"
          className={`${CN}__btn ${CN}__btn--error`}
          onClick={this.onApplyBtnClick}
        />

        <Button
          label="Apply"
          className={`${CN}__btn`}
          onClick={this.onApplyBtnClick}
        />
      </div>
    );
  }

  onApplyBtnClick() {
    const {isDarkTheme} = this.state;

    this.setState({
      isDarkTheme: !isDarkTheme
    });
  }

  onFormSubmit = () => {
    const { showSuccess } = this.state;

    this.setState({
      showSuccess: true
    });
  };

  render() {
    const { isChecked, inputValue, isDarkTheme, showSuccess } = this.state;
    const greetingElement = (<div className="class-12">{this.greeting}</div>);

    console.log('App render');

    const darkThemeClass = isDarkTheme ? `${CN}__dark` : '';

    return (
      <div className={`${CN} ${darkThemeClass}`}>
        <Header
          className="App-header"
          showLogo={true}
        >
          <div>this is children of header</div>
        </Header>

        <Form onSubmit={this.onFormSubmit}/>

        { showSuccess && <div>All good!</div> }
      </div>
    );
  }
}

export default AppTheReal;
