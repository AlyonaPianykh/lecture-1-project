import React, {Component} from 'react';
import {Button as Button} from '../Button/Button';
import {Header} from '../Header/Header';
import {Form} from '../Form/Form'
import Switch from 'react-switch';

import './App.css';

const CN = 'App';

class AppTheReal extends Component {
    constructor() {
        super();

        this.greeting = 'Hello, world!';

        this.state = {
            isChecked: false,
            inputValue: '',
            isDarkTheme: true,
            showSuccess: false
        };

        this.onApplyBtnClick = this.onApplyBtnClick.bind(this);
    }

    renderActionsBlock() {
        return (
            <div className="actions-block">
                <Button
                    label="Light mode"
                    className={`${CN}__btn ${CN}__btn--error`}
                    onClick={this.onApplyBtnClick}
                />

                <Button
                    label="Dark mode"
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
        //         const {showSuccess} = this.state;
        //
        //         this.setState({
        //             showSuccess: !showSuccess
        //         })
        //     }
        // }
        this.setState({
            showSuccess: true
        });
        console.log('success');
    };

    render() {
        const {isDarkTheme, showSuccess} = this.state;
        const darkThemeClass = isDarkTheme ? `${CN}__dark` : '';

        return (
            <div className={`${CN} ${darkThemeClass}`}>
                <Header
                    className="App-header"
                    showLogo={true}
                >
                    <div>this is children of header</div>
                </Header>

                <Form onFormSubmit={this.onFormSubmit}/>

                {showSuccess && <div>All good!</div>}

                <Button
                    label="light/dark mode"
                    className={`${CN}__btn ${CN}__btn--error`}
                    onClick={this.onApplyBtnClick}
                />

                <div>Switcher</div>
                <Switch
                    onChange={this.onApplyBtnClick}
                    checked={this.state.isChecked}
                />

            </div>
        );
    }
}

export default AppTheReal;


//when button is true, add style (green border to it), when false - don't
//toggle add same function
