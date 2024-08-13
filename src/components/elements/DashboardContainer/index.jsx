import React from 'react';
import './styles.scss'

export const  DashboardContainer = (props) => {
    return(
        <div className='dashboard-container'>
            {props.element}
        </div>
    )
}