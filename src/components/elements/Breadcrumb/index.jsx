import React from 'react';
import {CgArrowLongLeft} from '@react-icons/all-files/cg/CgArrowLongLeft'
import './styles.scss'

export const BreadcrumbElement = (props) => {

    return(
        <span className='breadcrumb'>
            {props?.showIcon ? 
                <CgArrowLongLeft  onClick={props.goBack}/> : null}
            <p>{props?.text}</p>
        </span>
    )
}