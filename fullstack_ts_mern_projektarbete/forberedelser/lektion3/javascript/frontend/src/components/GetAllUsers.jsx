import UserService from '../utils/api/service/UsersService'
import { useState } from 'react'
import CardList from './CardList'

const GetAllUsers = () => {
    const [data, setData] = useState([])

    const fetchDataFromExternalApi = () => {
        UserService.getAllUsers()
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }


    return (
        <>
            <h1>GetAllUsers</h1>
            <button onClick={ fetchDataFromExternalApi }>
                Get All Users
            </button>
            <CardList users={ data }/>
        </>
    )
}

export default GetAllUsers
