import AliveService from '../utils/api/service/AliveService'
import { useState } from 'react'

const Alive = () => {
    const [data, setData] = useState('')

    const checkApiStatus = () => {
        AliveService.alive()
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <h1>Alive</h1>
            <button onClick={ checkApiStatus }>
                Check if API is Alive
            </button>
            <h3>{ data }</h3>
        </>
    )
}

export default Alive
