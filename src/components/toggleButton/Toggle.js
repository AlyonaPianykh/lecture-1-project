import React from 'react';

import './Toggle.css'

export const Toggle = ({ checked, handleToggle }) => {
    return (
        <>
            <input
                checked={checked}
                onChange={handleToggle}
                className="toggleCheckbox"
                id={'toggleNew'}
                type="checkbox"
            />
            <label
                style={{ background: checked && '#06D6A0' }}
                className="toggleLabel"
                htmlFor={`toggleNew`}
            >
                <span className={`toggleButton`}/>
            </label>
        </>
    );
};
