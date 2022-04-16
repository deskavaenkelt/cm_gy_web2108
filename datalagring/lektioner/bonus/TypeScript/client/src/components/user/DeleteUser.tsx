import UserService from '../../utils/api/service/UserService'
import css from './Container.module.css'
import { useState } from 'react'

const DeleteUser = () => {
    const [text, setText] = useState<string>('')
    const [id, setId] = useState<string>('')

    const deleteUserById = () => {
        UserService.deleteUserById(id)
            .then(res => {
                setText(res.data.message)
            })
            .catch(err => {
                setText(err.response.data.message)
            })
    }

    return (
        <article className={ css.container }>
            <h1>DeleteUser</h1>

            Id: <input type='string'
                       id='id'
                       value={ id }
                       onChange={ event => setId(event.target.value) }/>
            <br/>

            <button onClick={ function () {
                deleteUserById()
            } }>Delete user
            </button>
            <button onClick={ function () {
                setText('')
            } }>clear
            </button>
            <p>{ text }</p>
        </article>
    )
}

export default DeleteUser
