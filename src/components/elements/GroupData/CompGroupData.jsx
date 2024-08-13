import React from 'react';
import './styles.scss'

export const GroupData = (props) => {
    return (
        <div className='group-data'>
            <p className='group-data-label'>{props?.label}</p>
            <p className='group-data-value'>{props?.value}</p>
        </div>
    )
}