import { Link } from 'react-router-dom'
import RoutingPath from '../routing/RoutingPath'
import './NavigationBar.css'

const NavigationBar = () => {
    return (
        <nav>
            <ul className='nav-list'>
                <li className='nav-list-item'>
                    <Link className='nav-list-item-a active' to={ RoutingPath.homeView }>Home</Link>
                </li>
                <li className='nav-list-item'>
                    <Link className='nav-list-item-a' to={ RoutingPath.otherView }>Other</Link>
                </li>
                <li className='nav-list-item'>
                    <Link className='nav-list-item-a' to={ RoutingPath.useStateView }>UseState</Link>
                </li>
                <li className='nav-list-item'>
                    <Link className='nav-list-item-a' to={ RoutingPath.loggedInView }>LoggedIn</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationBar
