import React, {Component} from 'react'
import './Toggle.css'
import {Button} from "../Button/Button";

const CN = 'custom-toggle';

export class Toggle extends Component {

    // constructor(props){
    //     super(props);
    //
    //     this.state = {
    //         isDarkTheme: true
    //     };
    // }

    render() {
        const { onSubmit, isOn, handleToggle } = this.props;

        return(
            <div className="actions-block">
                <Button className="btn"
                    label="Cancel"
                    className={`${CN}__btn ${CN}__btn--error`}
                    onClick={onSubmit}
                />

                <Button
                    label="Apply"
                    className={`${CN}__btn`}
                    onClick={onSubmit}
                />

                <input
                    checked={isOn}
                    onChange={handleToggle}
                    className="toggle-checkbox"
                    id={'toggle-new'}
                    type="checkbox"
                />
                <label
                    style={{ background: isOn && '#06D6A0' }}
                    className="toggle-label"
                    htmlFor={`toggle-new`}
                >
                    <span className={`toggle-button`}/>
                </label>

            </div>
        )
    }
}

