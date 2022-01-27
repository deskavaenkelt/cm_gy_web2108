import { useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import RoutingPath from '../router/RoutingPath'
import { UserContext } from '../utils/global/Provider/UserProvider'
import {userCredentialsData as correct} from '../utils/global/data/userCredentialsData'

const SignInView = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const [username, setUsername] = useState('Lars')
    const [password, setPassword] = useState('Hemligt')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    function validateInput() {
        for (let i = 0; i < correct.length; i++) {
            if (username === correct[i].username && password === correct[i].password) {
                setAuthenticatedUser(username)
                navigate(RoutingPath.signedInView)
            }
        }

        setError('Wrong credentials provided')
    }

    return (
        <>
            <h1>Sign-In</h1>
            <span>Username: </span>
            <input type='text' value={username} onChange={ event => setUsername(event.target.value) }/>
            <br/>
            <span>Password: </span>
            <input type='password' value={password} onChange={ event => setPassword(event.target.value) }/>
            <br/>
            <h3>{ error }</h3>
            <br/>
            <button onClick={ validateInput }>Sign In</button>
        </>
    )
}

export default SignInView
