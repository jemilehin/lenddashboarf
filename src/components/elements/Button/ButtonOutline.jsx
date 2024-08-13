import React from 'react';
import './styles.scss'

const ButtonOutline = (props) => {

    return(
        <button className={`btn-outline btn ${props.className}`}>
            {props?.text}
        </button>
    )
}

export default ButtonOutline