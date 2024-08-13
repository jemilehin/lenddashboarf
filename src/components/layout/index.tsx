import React, { useEffect, useState } from 'react';
import logo from '../../assets/lendsqr_logo.png';
import member from '../../assets/member2.jpg';
import { FaSearch } from '@react-icons/all-files/fa/FaSearch'
import { FaCaretDown } from '@react-icons/all-files/fa/FaCaretDown'
import { FaBars } from '@react-icons/all-files/fa/FaBars'
import { FaTimes } from '@react-icons/all-files/fa/FaTimes'
import { BiBell } from '@react-icons/all-files/bi/BiBell'
import './styles.scss';
import demoroute from '../../resources/Routes';
import { Link, useLocation } from 'react-router-dom';
import { MobileMenu } from '../mobile_menu';

interface PropMenu {
    title: string,
    routeIcon: JSX.Element | string,
    type: string,
    link: string
}


const LayoutView = (props: { element: JSX.Element }) => {
    const [isShowMenu, setShowMenu] = useState<boolean>(false)
    const [urlLocation, setUrlLocation] = useState<string>('')
    const currentUrl = useLocation()

    useEffect(() => {
        if(currentUrl.pathname.length > 1){
            setUrlLocation(currentUrl.pathname.slice(1, currentUrl.pathname.length-1))
        }else setUrlLocation('/')
    } ,[currentUrl])

    const ToggleMenu = () => {
        let menuELement = document.getElementById('mobile-menu')

        if (menuELement?.classList.contains('mobile-off') || menuELement?.classList.contains('out-menu')) {
            menuELement?.classList.remove('out-menu')
            menuELement?.classList.remove('mobile-off')
            menuELement?.classList.add('mobile-dashboard-menu')
            setShowMenu(true)
        } else {
            setShowMenu(false)
            menuELement?.classList.add('out-menu')
            menuELement?.classList.remove('mobile-dashboard-menu')
            setTimeout(() => menuELement?.classList.add('mobile-off'), 3000)
        }
    }

    const ToggleSearchInput = () => {
        const inputContainerEl = document.getElementById('mobile-search-container')

        if (inputContainerEl?.classList.contains('mobile-input-off')) {
            inputContainerEl.classList.add('mobile-input-slide-down')
            inputContainerEl.classList.remove('mobile-input-slide-up')
            inputContainerEl.classList.remove('mobile-input-off')
            setTimeout(() => inputContainerEl?.classList.add('slide-down-constant'), 2000)
        } else {
            inputContainerEl?.classList.remove('mobile-input-slide-down')
            setTimeout(() => inputContainerEl?.classList.remove('slide-down-constant'), 2000)
            inputContainerEl?.classList.add('mobile-input-slide-up')
            setTimeout(() => inputContainerEl?.classList.add('mobile-input-off'), 3000)
        }
    }

    return (
        <div>
        <div id='mobile-search-container' className='mobile-input-off'>
            <div className='mobile-input-wrapper'>
                <input placeholder='Search for anything' className='mobile-search-input' />
                <button className='mobile-search-btn-action'>
                    <FaSearch size={12} color='white' />
                </button>
            </div>
        </div>
            <div className='sqr-header'>
                <div className='leftsqr-header'>
                    <img src={logo} height={60} width={180} alt="logo" />
                    <div className='search-input-container'>
                        <input placeholder='Search for anything' className='search-input' />
                        <button className='searchbtn'>
                            <FaSearch size={12} color='white' />
                        </button>
                    </div>
                    <div className='mobile-search-btn' onClick={ToggleSearchInput}>
                        <FaSearch size={12} color='black' />
                    </div>
                </div>
                <div className='rightsqr-header'>
                    <div className='toggle-menu' onClick={() => ToggleMenu()}>
                        {isShowMenu ? <FaTimes size={25} /> : <FaBars size={25} style={{ display: 'block' }} />}
                    </div>
                    <ul>
                        <li><a>Docs</a></li>
                        <li><BiBell size={20} /></li>
                        <li className='userdropdown'>
                            <img src={member} className='profile-img' />
                            <p><strong>Adedeji</strong></p>
                            <FaCaretDown />
                        </li>
                    </ul>
                </div>
            </div>
            <MobileMenu closeMenu={ToggleMenu} activeLink={urlLocation}/>
            <aside className='dashboard-menu'>
                <ul>
                    {demoroute().map((item: PropMenu, index) => {
                        return (
                            <li 
                                key={index}
                                className={`${item.type === 'noroute' ? 'menu-divider' : ''} ${item.link === urlLocation ? 'active-link' : ''}`}
                            >
                                {item.type !== 'version' ? <Link to={item.link}>
                                    <div style={{ paddingRight: 3 }}>{item.routeIcon}</div>
                                    <span>{item.title}</span>
                                    {item.type === 'dropdown' &&
                                        <div style={{ paddingLeft: 3 }}><FaCaretDown size={12} /></div>
                                    }
                                </Link> : <p style={{ fontSize: '10px' }}>{item.title}</p>}
                            </li>
                        )
                    })}
                </ul>
            </aside>
            <div className='page_container'>
                {props.element}
            </div>
        </div>
    )
}

export default LayoutView