import React from 'react';
import './styles.scss';
import Naira from '../../../assets/Naira.svg'


const CurrencyText = (props) => {
    return (
        <div className='currency-container'>
                {/* <Naira /> */}
                <p className={props.textClass}>{props?.amount}</p>
        </div>
    )
}

export default CurrencyText