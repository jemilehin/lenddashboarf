import React from 'react';
import {FaUsers} from '@react-icons/all-files/fa/FaUsers'
import './styles.scss'

const CardOverview = (props) => {

    return (
        <div style={props?.style} className={`card-overview ${props.extraClass}`}>
            <div style={props.carIiconStyle} className='card-icon'>
                <FaUsers color={props?.color}/>
            </div>
            <p>{props?.text}</p>
            <h3>{props?.value}</h3>
        </div>
    )
}

export default CardOverview