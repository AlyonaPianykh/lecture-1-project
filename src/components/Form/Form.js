import React,{Component} from 'react'
import { Input} from '../Input/Input'
import Checkbox from '../Checkbox/Checkbox'
import {Button} from "../Button/Button";

const CN = 'custom-from'
export class Form extends Component{
    constructor(props){
        super(props);

        this.state = {
            inputValue: '',
            isChecked: false,
        };

    };

    onInputChange = (inputValue) => {
        this.setState({
            inputValue
        });
    };

    onCheck = () =>{
        const { isChecked } = this.state;

        this.setState({
            isChecked: !isChecked
        });
    };

    isValid = ()=>{
        const{inputValue, isChecked} = this.state;

        return inputValue.length && isChecked
    };

    onClear = ()=>{
        const { onTextHide } = this.props;
        this.setState({
            inputValue: '',
            isChecked: false
        });
        onTextHide && onTextHide();
    };


    render(){
        const { inputValue,isChecked} = this.state;
        const { onFormSubmit} = this.props;
        return(

            <form>
                <Input
                    className={`${CN}__input`}
                    onChange={this.onInputChange}
                    value={inputValue}
                />
                <Checkbox
                    onChange={this.onCheck}
                    isChecked={isChecked}
                    label="Lorem ipsum dolor sit amet."
                />

                <Button
                    label="click me"
                    label2='clear'
                    className={`${CN}__btn`}
                    onClick={onFormSubmit}
                    disabled={!this.isValid()}
                    onClick2={this.onClear}
                    inputValue={inputValue}
                />
            </form>
        );
    }
}