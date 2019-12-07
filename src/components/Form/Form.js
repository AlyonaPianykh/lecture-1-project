import React, {Component} from 'react';
import {Input} from "../Input/Input";
import CheckBox from '../Checkbox/Checkbox'
import {Button} from "../Button/Button";

const CN = 'custom-form';

export class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            isChecked: false
        }
    }

    onInputChange = (inputValue) => {
        this.setState({
            inputValue
        });
    };

    onCheck = () => {
        const {isChecked} = this.state;

        this.setState({
            isChecked: !isChecked
        })
    };

    ClearAll = () => {
        const {onFormSubmit} = this.props;
        onFormSubmit();
        this.setState({
            isChecked: false,
            inputValue: '',
        });
    };


    isValid = () => {
        const {inputValue, isChecked} = this.state;
        return inputValue.length && isChecked;
    };

    render() {
        const {inputValue, isChecked} = this.state;
        const {onFormSubmit} = this.props;

        return (
            <form>
                <Input
                    className={`${CN}_input`}
                    onChange={this.onInputChange}
                    value={inputValue}
                />
                <CheckBox
                    onChange={this.onCheck}
                    isChecked={isChecked}
                    label='lalala'
                />
                <Button
                    label='click me'
                    className={`${CN}_btn`}
                    onClick={onFormSubmit}
                    disabled={!this.isValid()}
                />
                <Button
                    label='clear all'
                    className={`${CN}_btn`}
                    onClick={this.ClearAll}
                />

            </form>
        )
    }
}
