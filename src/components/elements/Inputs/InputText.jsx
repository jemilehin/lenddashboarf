import React from 'react';
import './styles.scss'

const TextInput = (props) => {

    return (
        <div className='input-container'>
            <label className='input-label'>{props.label}</label>
            <div className='input-wrapper'>
                <input placeholder={props.placeholder} {...props} />
                {props.iconElement !== undefined ? props.iconElement : null}
            </div>
        </div>
    )
}

export default TextInput