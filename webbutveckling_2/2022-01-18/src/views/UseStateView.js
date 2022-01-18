import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RoutingPath from '../routing/RoutingPath'

const UseStateView = () => {
    const authenticatedUser = {
        username: 'Lars',
        password: 'Hemligt'
    }
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    // console.log('name: ', name)
    // console.log('password: ', password)

    function verifyUser() {
        if (name === authenticatedUser.username && password === authenticatedUser.password) {
            console.log('Credentials correct.')
            navigate(RoutingPath.loggedInView)
        } else {
            console.log('Credentials NOT correct.')
        }
    }

    function reset() {
        setName('')
        setPassword('')
        console.log('name: ', name)
        console.log('password: ', password)
    }

    return (
        <>
            <h1>UseStateView</h1>
            <h2>{ name }</h2>
            Username: <input type='text'
                             value={ name }
                             onChange={ (getName) => setName(getName.target.value) }/>
            <br/>
            Password: <input type='text'
                             value={ password }
                             onChange={ (getPassword) => setPassword(getPassword.target.value) }/>
            <br/>
            <button onClick={ verifyUser }>Verify</button>
            <button onClick={ reset }>Reset</button>
        </>
    )
}

export default UseStateView


/*let name = 'Lars'

name = 'Christoffer'

function something() {
    name = 'Emil'
    console.log(name)
}*/
