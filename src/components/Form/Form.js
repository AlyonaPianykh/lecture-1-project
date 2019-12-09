import React, {Component} from 'react';
import {Input} from "../Input/Input";
import Checkbox from "../Checkbox/Checkbox";
import {Button} from "../Button/Button";

const CN = 'custom-form';

export class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            isChecked: false, /*This will be change our checkBox*/
        }; /*setState Function can't use in constructor*/
    }

    onInputChange = (inputValue) => {
        this.setState({
            inputValue
        });
    };

    onCheck = () => { /*This function look on value our checkBox and set new set*/ /*We need use arrow function beacouse context*/
        const { isChecked } = this.state;

        this.setState({
            isChecked: !isChecked
        });
    };

    /*nFormSubmit = () => {
        const {onFormSubmit} = this.props;

        onFormSubmit && onFormSubmit(); /!*Більш надійний спосіб*!/

        console.log('success');
    };*/

    isValid = () => {
        const { inputValue, isChecked } = this.state;

        return inputValue.length && isChecked;
    };

    render() {
        const { inputValue, isChecked } = this.state;
        const {onFormSubmit} = this.props;

        return (
            <form>
                <Input
                    className = {`${CN}__input`}
                    onChange = {this.onInputChange}
                    value = {inputValue}
                />
                <Checkbox
                    onChange = {this.onCheck}
                    isChecked = { isChecked }
                    label = "Hello World"
                />
                <Button
                    label = "click me"
                    className = {`${CN}__btn`}
                    onClick = {onFormSubmit}
                    disabled = {!this.isValid()}
                />
            </form>
        );
    }
}
