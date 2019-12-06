import React, {Component} from 'react';
import './Toggle.css';

export class Toggle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: !!props.checked
        }
    }


    render() {

        const {type = 'checkbox', checked, onChange} = this.props;

        return (
            <label className="toggle-wrap">
                <div>{this.props.label}</div>
                <input type={type}
                       checked={this.state.checked}
                       onChange={this.onToggleChange}
                />
                <div className="toggle-el"></div>
            </label>
        );
    }

    onToggleChange = (e) => {
        this.setState({
            checked: e.target.checked
        });
    }
}
