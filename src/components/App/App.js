import React, { Component } from 'react';
import { people } from '../../constants/people';
import { ButtonAsClass as Button } from '../Button/Button';
import { Header } from '../Header/Header';
// import Checkbox from '../Checkbox/Checkbox';
// import { Input } from '../Input/Input';
import {Form} from '../Form/Form';

import './App.css';

const CN = 'App';

// function renderPeopleList() {
//   return people.map(person => {
//     const { firstName, lastName, avatar, address = 'New York' } = person;
//
//     return (
//       <li className="list-item" key={`${firstName} ${lastName}`}>
//         <div>{firstName}</div>
//         <div>{lastName}</div>
//         <img
//           src={avatar}
//           className="avatar"
//           alt={`avatar for ${firstName} ${lastName}`}
//         />
//         <div>{address}</div>
//       </li>
//     );
//   });
// }

class AppTheReal extends Component {
  constructor() {
    super();

    this.state = {
      isDarkTheme: false,
      showSuccess: false
    };

    this.onApplyBtnClick = this.onApplyBtnClick.bind(this);
  }

  // renderActionsBlock() {
  //   return (
  //       <div className="actions-block">
  //         <Button
  //             label="Cancel"
  //             className={`${CN}__btn ${CN}__btn--error`}
  //             onClick={this.onApplyBtnClick}
  //         />
  //
  //         <Button
  //             label="Apply"
  //             className={`${CN}__btn`}
  //             onClick={this.onApplyBtnClick}
  //         />
  //
  //       </div>
  //   );
  // }

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
    })
  };

  render() {
    const { isDarkTheme, showSuccess } = this.state;

    console.log('App render');

    const darkThemeClass = isDarkTheme ? `${CN}__dark` : '';

    return (
      <div className={`${CN} ${darkThemeClass} `}>
        <Header
          className="App-header"
          showLogo={true}
        >
          <div>this is children of header</div>
        </Header>

          <Form onSubmit={this.onFormSubmit}/>

          {showSuccess && <div>All good!</div>}

      </div>
    );
  }
}

export default AppTheReal;
