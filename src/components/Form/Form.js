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


    render(){
        const {inputValue, isChecked} = this.state;
        const { onFormSubmit} = this.props
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
                    className={`${CN}__btn`}
                    onclick={this.OnFormSubmit}
                    disabled={!this.isValid()}
                />
            </form>
        );
    }
}