import React from 'react';
import { AiOutlineUser } from '@react-icons/all-files/ai/AiOutlineUser'
import { AiFillStar } from '@react-icons/all-files/ai/AiFillStar'
import { AiOutlineStar } from '@react-icons/all-files/ai/AiOutlineStar'
import './styles.scss'
import CurrencyText from '../Text/ElementCurrencyText';

// const cardMenu = [
//     { component: 'General Details' },
//     { component: 'Documents' },
//     { component: 'Bank Details' },
//     { component: 'Loans' },
//     { component: 'Savings' },
//     { component: 'App and System' },
// ]

export const MobileUserInfo = (props) => {
    const [comp, setComp] = React.useState(props?.cardMenu[0])

    return (
        <div className='mobile-user-info'>
            <div className='info-inner-left'>
                <ul>
                    {props?.cardMenu.map((item, index) => 
                    <li 
                        key={index} 
                        onClick={() => props.setComponent(item.component)} 
                        className={
                            `comp-control ${props?.currentComp === item.component 
                                ? 'mobile-active-comp' 
                                : ''}
                            `}
                        >
                            {item.component}
                        </li>
                    )}
                </ul>
            </div>
            <div className='info-inner-right'>
                <div className='user-info-container'>
                    <div className='left-details'>
                        <div className='user-circle'>
                            <AiOutlineUser size={25} color='#050554' />
                        </div>
                        <div className='user-name'>
                            <h3 className='medium-font'>Grace Effiom</h3>
                            <p style={{ paddingTop: '.1em' }} className='small-font'>LSQFf587g90</p>
                        </div>
                    </div>
                    <div className='middle-details'>
                        <p> User's Tier</p>
                        <div className='user-ratings'>
                            <AiFillStar size={13} color='gold' />
                            <AiOutlineStar size={13} color='gold' />
                            <AiOutlineStar size={13} color='gold' />
                        </div>
                    </div>
                    <div className='right-details'>
                        <CurrencyText amount='200,000.00' textClass='medium-font' />
                        <span className='small-font'>9912245878/Providus Bank</span>
                    </div>
                </div>
            </div>
        </div>
    )
}