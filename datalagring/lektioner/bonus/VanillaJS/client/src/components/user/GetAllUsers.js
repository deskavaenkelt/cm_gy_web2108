import { useState } from 'react'
import UserService from '../../utils/api/service/UserService'
import CardList from './cards/CardList'
import css from './Container.module.css'

const GetAllUsers = () => {
    const [allUsers, setAllUsers] = useState([])

    const getAllUsers = () => {
        UserService.getAll()
            .then(res => {
                setAllUsers(res.data)
                console.log(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <article className={css.container}>
            <h1>Get all users</h1>
            <button onClick={ getAllUsers }>getUsers</button>
            <button onClick={ () => {setAllUsers([])} }>clear</button>
            <br/>
            <CardList users={allUsers} />
        </article>
    )
}

export default GetAllUsers
