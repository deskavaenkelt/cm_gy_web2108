import UsersService from '../utils/api/service/UsersService'
import { useState } from 'react'

const DeleteUser = () => {
    const [data, setData] = useState('')
    const [name, setName] = useState('Christoffer')

    const sendDataToApi = () => {
        UsersService.deleteUser(name)
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <h1>DeleteUser</h1>
            <input type='text'
                   value={ name }
                   onChange={ e => setName(e.target.value) }/>
            <button onClick={ sendDataToApi }>
                Delete User
            </button>
            <h3>{ data }</h3>
        </>
    )
}

export default DeleteUser
