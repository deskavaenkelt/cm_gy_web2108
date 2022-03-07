import UsersService from '../utils/api/service/UsersService'
import { useState } from 'react'
import Card from './Card'

const UpdateUser = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('Carina')
    const [newName, setNewName] = useState('Christoffer')
    const [age, setAge] = useState(19)
    const [gender, setGender] = useState('Male')

    const sendDataToApi = () => {
        const changedUser = {
            'name': name,
            "newName": newName,
            'age': age,
            'gender': gender
        }
        UsersService.updateUser(changedUser)
            .then(response => {
                setData(response.data)
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <h1>UpdateUser</h1>
            <input type='text'
                   value={ name }
                   onChange={ e => setName(e.target.value) }/>
            <input type='text'
                   value={ newName }
                   onChange={ e => setNewName(e.target.value) }/>
            <input type='number'
                   value={ age }
                   onChange={ e => setAge(Number(e.target.value)) }/>
            <input type='text'
                   value={ gender }
                   onChange={ e => setGender(e.target.value) }/>
            <button onClick={ sendDataToApi }>
                Update New User
            </button>

            { data.name ? <Card name={ data.name }
                           age={ data.age }
                           gender={ data.gender }/>
                : <h3>{ data }</h3> }

        </>
    )
}

export default UpdateUser
