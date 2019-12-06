import React, {Component} from 'react';
import {Button} from '../Button/Button';

const CN = 'custom_toggle';

export class Toggle extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            isDarkTheme: true,
        });

        this.onApplyBtnClick = this.onApplyBtnClick.bind(this);
    }

    onApplyBtnClick() {
        const {isDarkTheme} = this.state;

        this.setState({
            isDarkTheme: !isDarkTheme
        });
    };

    render() {const {isDarkTheme} = this.state;
        const darkThemeClass = isDarkTheme ? `${CN}__dark` : '';

        return (
            <div className={`${CN} ${darkThemeClass}`}>

                <Button
                    label="light/dark mode"
                    className={`${CN}__btn ${CN}__btn--error`}
                    onClick={this.onApplyBtnClick}
                />

            </div>
        );
    }
}
