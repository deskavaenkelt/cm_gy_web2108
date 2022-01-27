import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import RoutingPath from '../router/RoutingPath'

const SignInView = () => {
    const [username, setUsername] = useState('Lars')
    const [password, setPassword] = useState('Hemligt')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const correct = {
        username: 'Lars',
        password: 'Hemligt'
    }

    function validateInput() {
        if (username === correct.username && password === correct.password) {
            navigate(RoutingPath.signedInView)
        } else {
            setError('Wrong credentials provided')
        }
    }

    return (
        <>
            <h1>Sign-In</h1>
            <span>Username: </span>
            <input type='text' onChange={ event => setUsername(event.target.value) }/>
            <br/>
            <span>Password: </span>
            <input type='password' onChange={ event => setPassword(event.target.value) }/>
            <br/>
            <h3>{ error }</h3>
            <br/>
            <button onClick={ validateInput }>Sign In</button>
        </>
    )
}

export default SignInView
