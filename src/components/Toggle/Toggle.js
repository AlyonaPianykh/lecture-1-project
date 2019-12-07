import React, {Component} from 'react';
import './Toggle.css';

export class Toggle extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        const {type = 'checkbox', isToggleChecked, onChange} = this.props;

        return (
            <label className="toggle-wrap">
                <input type={type}
                       checked={isToggleChecked}
                       onChange={onChange}
                />
                <div className="toggle-el"></div>
            </label>
        );
    }

}
