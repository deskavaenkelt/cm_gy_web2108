import { useNavigate } from 'react-router-dom'
import { UserContext } from '../utils/global/Provider/UserProvider'
import { useContext } from 'react'
import RoutingPath from '../router/RoutingPath'

const SignedInView = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const navigate = useNavigate()

    function logOut() {
        setAuthenticatedUser('')
        navigate(RoutingPath.signInView)
    }

    return (
        <>
            <h1>SignedIn</h1>
            <button onClick={ logOut }>Log out</button>
        </>
    )
}

export default SignedInView
