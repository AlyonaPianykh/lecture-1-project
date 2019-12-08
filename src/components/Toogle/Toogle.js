import React, { Component } from 'react';
import '../Button/Button.css';
import '../Button/Button';
import {ButtonAsClass as Button} from "../Button/Button";

const CN = 'default-btn';

export class Toogle extends Component {

    render() {
        const { onHandleFunction, ThemeOn } = this.props;

        return (
            <div className="actions-block">
                <Button
                    label="Light theme"
                    className={`${CN}__btn ${ThemeOn === 'light' && 'enabled-btn'}`}
                    onClick={ () => onHandleFunction('light') }
                />

                <Button
                    label="Dark theme"
                    className={`${CN}__btn ${ThemeOn === 'dark' && 'enabled-btn'}`}
                    onClick={ () => onHandleFunction('dark') }
                />
            </div>
        );
    }
}

