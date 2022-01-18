import { Link } from 'react-router-dom'
import RoutingPath from '../routing/RoutingPath'

const NavigationBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to={ RoutingPath.homeView }>Home</Link></li>
                <li><Link to={ RoutingPath.otherView }>Other</Link></li>
            </ul>
        </nav>
    )
}

export default NavigationBar
