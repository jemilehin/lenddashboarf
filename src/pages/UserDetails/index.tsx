import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineUser } from '@react-icons/all-files/ai/AiOutlineUser'
import { AiFillStar } from '@react-icons/all-files/ai/AiFillStar'
import { AiOutlineStar } from '@react-icons/all-files/ai/AiOutlineStar'
import './styles.scss';
import { DashboardContainer } from '../../components/elements/DashboardContainer';
import { BreadcrumbElement } from '../../components/elements/Breadcrumb';
import PageTitle from '../../components/elements/PageTitle';
import ButtonOutline from '../../components/elements/Button/ButtonOutline';
import CurrencyText from '../../components/elements/Text/ElementCurrencyText';
import GeneralDetails from '../../components/elements/UserDetails/ComponentGeneralDetails';
import { MobileUserInfo } from '../../components/elements/UserDetails/MobileUserInfo';

const cardMenu = [
    { component: 'General Details'},
    { component: 'Documents'},
    { component: 'Bank Details'},
    { component: 'Loans'},
    { component: 'Savings'},
    { component: 'App and System'},
]
const UsersDetails: React.FC = () => {

    const navigate = useNavigate()

    const [component, setComponent] = React.useState<string>(cardMenu[0].component)

    const SwitchComponent = (comp:string) => {
        switch (comp) {
            case 'General Details':
                return <GeneralDetails />
        }
    }

    return (
        <DashboardContainer
            element={
                <>
                    <BreadcrumbElement goBack={() => navigate(-1)} showIcon={true} text='Back to Users' />
                    <div className='pagetitle-container'>
                        <PageTitle text='User Details' />
                        <div>
                            <ButtonOutline className='btn-blacklist' text='BLACKLIST USER' />
                            <ButtonOutline className='btn-activate' text='ACTIVATE USER' />
                        </div>
                    </div>
                    <div className='card-menu'>
                        <div className='user-details'>
                            <div className='user-circle'>
                                <AiOutlineUser size={25} color='#050554' />
                            </div>
                            <div className='user-info-container'>
                                <div className='left-details'>
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
                        <div className='user-menu'>
                            <ul>
                                {cardMenu.map((item,index) => <li onClick={() => setComponent(item.component)} className={`${component === item.component && 'active-component'}`}>{item.component}</li>)}
                            </ul>
                        </div>
                        <MobileUserInfo setComponent={setComponent} cardMenu={cardMenu} currentComp={component}/>
                    </div>
                    <div className='user-container'>
                        {
                            SwitchComponent(component)
                        }
                    </div>
                </>
            }
        />
    )
}

export default UsersDetails