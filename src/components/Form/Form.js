import React, {Component} from 'react';
import {Input} from "../Input/Input";
import CheckBox from "../Checkbox/Checkbox";
import {Button} from "../Button/Button";

const CN = 'custom-from';

export class Form extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            inputValue: '',
            isChecked: false
        });
    }

    onInputChange = (inputValue) => {
        this.setState({
            inputValue
        });
    };

    onCheck = () => {
        const {isChecked} = this.state;

        this.setState({
            isChecked : !isChecked
        });
    };

    isValid = () => {
        const {inputValue, isChecked} = this.state;

        return inputValue.length && isChecked;
    };

    OnFormSubmit = () => {
    //     const {onFormSubmit} = this.props;
    //     onFormSubmit && onFormSubmit();
        console.log('success');
  };


    render() {
        const {inputValue, isChecked} = this.state;
        const {onFormSubmit} = this.props;

        return (
            <form>
                <Input
                    className={`${CN}__input`}
                    onChange={this.onInputChange}
                    value={inputValue}
                    placeholder={''}
                />
                <CheckBox
                    onChange={this.onCheck}
                    isChecked={isChecked}
                    label="Check Box"
                />
                <Button
                    label="click"
                    className={`${CN}__btn`}
                    onClick={onFormSubmit}
                    disabled={!this.isValid()}
                />
            </form>
        );
    }
}
