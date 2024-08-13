import React from 'react'
import {BiBell} from '@react-icons/all-files/bi/BiBell'
import {FaCaretDown} from '@react-icons/all-files/fa/FaCaretDown'
import { Link } from 'react-router-dom';


import demoroute from '../../resources/Routes';
import member from '../../assets/member2.jpg'
import './styles.scss'

// interface PropMenu {
//     title:string,
//     routeIcon: JSX.Element | string,
//     type: string,
//     link: string
// }

export const MobileMenu = (props) => {

    return(
        <aside id='mobile-menu' className='mobile-off'>
                <ul>
                    <div className='mobile-user-header'>
                        <ul>
                            <li><a>Docs</a></li>
                            <li><BiBell size={20} /></li>
                            <li className='userdropdown'>
                                <img src={member} className='profile-img'/>
                                <p><strong>{props.username}</strong></p>
                                <FaCaretDown />
                            </li>
                        </ul>
                    </div>
                    {demoroute().map((item,index) => {
                        return(
                            <li 
                            key={index} 
                            className={`${item.type === 'noroute' ? 'menu-divider' : ''} ${item.link === props.activeLink ? 'active-link' : ''}`}
                            onClick={() => props.closeMenu()}
                            >
                                { item.type !== 'version' ? <Link to={item.link}>
                                    <div style={{paddingRight: 3}}>{item.routeIcon}</div>
                                    <span>{item.title}</span>
                                    {item.type === 'dropdown' && 
                                        <div style={{paddingLeft: 3}}><FaCaretDown size={12}/></div>
                                    }
                                </Link> : <p style={{fontSize: '10px'}}>{item.title}</p>}
                            </li>
                        )
                    })}
                </ul>
            </aside>
    )
}