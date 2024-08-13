import React from 'react';
import './styles.scss'

export const GroupSectionInfo = (props) => {
    return (
        <div className='info-wrapper'>
            <h4>{props.sectionName}</h4>
            <div className={`data-wrapper ${!props?.showBottomBorder ? null : 'bottom-border' }`} >
                <div className='data-row'>
                    {props.elements}
                </div>
            </div>
        </div>
    )
}