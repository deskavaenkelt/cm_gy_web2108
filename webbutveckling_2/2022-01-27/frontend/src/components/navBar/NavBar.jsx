import css from './NavBar.module.css'
import { Link } from 'react-router-dom'
import RoutingPath from '../../router/RoutingPath'
import { UserContext } from '../../utils/global/Provider/UserProvider'
import { useContext } from 'react'

const NavBar = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    function showLoggedInUser() {
        // if (authenticatedUser.length > 0) {
        if (authenticatedUser) {
            return <li className={ `${ css.item } ${ css.name }` }>
                <span className={ css.link }>Logged in user: { authenticatedUser }</span>
            </li>
        }
    }

    function signIn() {
        return (
            <li className={ css.item }>
                <Link className={ css.link } to={ RoutingPath.signInView }>Sign-In</Link>
            </li>
        )
    }

    function signedIn() {
        return (
            <li className={ css.item }>
                <Link className={ css.link } to={ RoutingPath.signedInView }>Signed-In</Link>
            </li>
        )
    }

    return (
        <nav>
            <ul className={ css.navList }>
                <li className={ css.item }>
                    <Link className={ `${ css.link } ${ css.active }` } to={ RoutingPath.homeView }>Home</Link>
                </li>
                { !authenticatedUser ? signIn() : signedIn() }
                {/*{ authenticatedUser ? signedIn() : signIn() }*/}
                { showLoggedInUser() }
            </ul>
        </nav>
    )
}

export default NavBar
