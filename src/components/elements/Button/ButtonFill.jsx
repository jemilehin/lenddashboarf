import React from 'react';
import './styles.scss'

const ButtonFill = (props) => {

    return(
        <button className={`btn-fill btn ${props.className}`}>
            {props?.text}
        </button>
    )
}

export default ButtonFill