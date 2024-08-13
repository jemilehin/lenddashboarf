import React from 'react';
import './styles.scss'

const PageTitle = (props) => {

    return(
        <h3 className='page-title'>
            {props?.text}
        </h3>
    )
}

export default PageTitle