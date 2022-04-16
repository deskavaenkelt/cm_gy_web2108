import { useState } from 'react'
import UserService from '../../utils/api/service/UserService'
import { CreateOrUpdateUser } from '../../utils/interface/Users'
import css from './Container.module.css'

const CreateUser = () => {
    const [text, setText] = useState<string>('')
    const [name, setName] = useState<string>('Ada')
    const [age, setAge] = useState<number>(18)
    const [gender, setGender] = useState<string>('Female')

    const createUser = () =>{
        const payload: CreateOrUpdateUser = {
            'name': name,
            'age': age,
            'gender': gender
        }
        UserService.createUser(payload)
            .then(response => {
                setText(response.statusText)
            })
            .catch(error => {
                console.error(error.message)
            })
    }

    return (
        <article className={css.container}>
            <h1>Create User</h1>
            Name: <input type='text'
                         id='name'
                         value={ name }
                         onChange={ event => setName(event.target.value) }/>
            <br/>

            Age: <input type='number'
                        id='age'
                        value={ age }
                        onChange={ event => setAge(Number(event.target.value)) }/>
            <br/>

            Gender: <input type='text'
                           id='gender'
                           value={ gender }
                           onChange={ event => setGender(event.target.value) }/>
            <br/>

            <button onClick={ function () {
                createUser()
            } }>Create user
            </button>
            <button onClick={ function () {
                setText('')
            } }>clear
            </button>
            <p>{ text }</p>

        </article>
    )
}

export default CreateUser
