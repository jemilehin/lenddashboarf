import {FaSuitcase} from '@react-icons/all-files/fa/FaSuitcase'
import {BiBuildingHouse} from '@react-icons/all-files/bi/BiBuildingHouse'
import {FaUserFriends} from '@react-icons/all-files/fa/FaUserFriends'
import {FaUserCircle} from '@react-icons/all-files/fa/FaUserCircle'
import {FaDownload} from '@react-icons/all-files/fa/FaDownload'
import {FaHandHolding} from '@react-icons/all-files/fa/FaHandHolding'
import {FaHandshake} from '@react-icons/all-files/fa/FaHandshake'
import {FaHatCowboy} from '@react-icons/all-files/fa/FaHatCowboy'
import {FaUserCheck} from '@react-icons/all-files/fa/FaUserCheck'
import {FaUserCog} from '@react-icons/all-files/fa/FaUserCog'
import {BiCreditCardAlt} from '@react-icons/all-files/bi/BiCreditCardAlt'
import {BiTransfer} from '@react-icons/all-files/bi/BiTransfer'
import {FaFan} from '@react-icons/all-files/fa/FaFan'
import {FaUserTimes} from '@react-icons/all-files/fa/FaUserTimes'
import {FaChartBar} from '@react-icons/all-files/fa/FaChartBar'
import {BiFilter} from '@react-icons/all-files/bi/BiFilter'
import {FaPlayCircle} from '@react-icons/all-files/fa/FaPlayCircle'
import {FaFileAlt} from '@react-icons/all-files/fa/FaFileAlt'
import {AiOutlineSetting} from '@react-icons/all-files/ai/AiOutlineSetting'
import {FaDoorOpen} from '@react-icons/all-files/fa/FaDoorOpen'


const routes = ()  =>  [
    {title: 'Switch Organization', routeIcon: <FaSuitcase size={15}/>, type: 'dropdown', link: '#'},
    {title: 'Dashboard', routeIcon: <BiBuildingHouse size={15}/>, type: 'route', link: '#'},
    {title: 'Customers', routeIcon: '', type: 'section', link: '#'},
    {title: 'Users', routeIcon: <FaUserFriends size={15}/>, type: 'route', link: '/'},
    {title: 'Guarantors', routeIcon: <FaUserCircle size={12}/>, type: 'route', link: '#'},
    {title: 'Loans', routeIcon: <FaDownload size={12}/>, type: 'route', link: '#'},
    {title: 'Decision Models', routeIcon: <FaHandshake size={12}/>, type: 'route', link: '#'},
    {title: 'Savings', routeIcon: <FaHatCowboy size={12}/>, type: 'route', link: '#'},
    {title: 'Loan Requests', routeIcon: <FaHandHolding size={12}/>, type: 'route', link: '#'},
    {title: 'Whitelist', routeIcon: <FaUserCheck size={12}/>, type: 'route', link: '#'},
    {title: 'Karma', routeIcon: <FaUserTimes size={12}/>, type: 'route', link: '#'},
    {title: 'Businesses', routeIcon: '', type: 'section', link: '#'},
    {title: 'Organization', routeIcon: <FaSuitcase size={12}/>, type: 'route', link: '#'},
    {title: 'Loan Products', routeIcon: <FaHandHolding size={12}/>, type: 'route', link: '#'},
    {title: 'Savings Products', routeIcon: <FaHatCowboy size={12}/>, type: 'route', link: '#'},
    {title: 'Fees and Charges', routeIcon: <BiCreditCardAlt size={12}/>, type: 'route', link: '#'},
    {title: 'Transactions', routeIcon: <BiTransfer size={12}/>, type: 'route', link: '#'},
    {title: 'Services', routeIcon: <FaFan size={12}/>, type: 'route', link: '#'},
    {title: 'Service Account', routeIcon: <FaUserCog size={12}/>, type: 'route', link: '#'},
    {title: 'Settlements', routeIcon: <BiTransfer size={12}/>, type: 'route', link: '#'},
    {title: 'Reports', routeIcon: <FaChartBar size={12}/>, type: 'route', link: '#'},
    {title: 'Settings', routeIcon: '', type: 'section', link: '#'},
    {title: 'Preferences', routeIcon: <BiFilter size={12}/>, type: 'route', link: '#'},
    {title: 'Fees and Pricing', routeIcon: <FaPlayCircle size={12}/>, type: 'route', link: '#'},
    {title: 'Audit Logs', routeIcon: <FaFileAlt size={12}/>, type: 'route', link: '#'},
    {title: 'Systems Messages', routeIcon: <AiOutlineSetting size={12}/>, type: 'route', link: '#'},
    {title: '', routeIcon: <div ></div>, type: 'noroute', link: '#'},
    {title: 'Logout', routeIcon: <FaDoorOpen size={12}/>, type: 'route', link: '#'},
    {title: 'v1.2.0', routeIcon: <></>, type: 'version', link: '#'},
    

]

export default routes