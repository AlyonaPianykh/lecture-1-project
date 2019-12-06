import React, { Component } from 'react';
import { Input } from "../Input/Input";
import Checkbox from "../Checkbox/Checkbox";
import { Button } from "../Button/Button";

const CN = 'custom-form';

export class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isChecked: false,
            inputValue: ''
        };
    }

    onInputChange = (inputValue) => {
          this.setState({
            inputValue
          });
        };

    onCheck = (e) => {
        const { isChecked } = this.state;

        this.setState({
            isChecked: !isChecked
        });
    };

    isValid = () => {
        const { isChecked, inputValue } = this.state;

        return inputValue.length && isChecked;
    };

    render() {
        const { inputValue, isChecked } = this.state;
        const { onSubmit } = this.props;

        return(
            <form>
                Hello there
                <div className={`${CN}`}>Enter your name</div>

                <Input
                    className={`${CN}__input`}
                    value={inputValue}
                    onChange={this.onInputChange}
                />

                <Checkbox
                onChange={this.onCheck}
                className={`${CN}__checkbox`}
                isChecked={isChecked}
                label="lorem porem korem gorem mprem orem dorem"
                />

                <Button
                label="click me!"
                disabled={!this.isValid()}
                onClick={onSubmit}
                />
            </form>
        );
    }
}
