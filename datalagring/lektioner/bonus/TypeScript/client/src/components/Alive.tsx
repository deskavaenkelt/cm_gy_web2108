import AliveService from '../utils/api/service/AliveService'
import { useEffect, useState } from 'react'
import css from './Alive.module.css'

const Alive = () => {
    const [text, setText] = useState('No connection to backend!')
    const [connected, setConnected] = useState(false)

    const alive = () => {
        AliveService.apiConnectionStatus()
            .then(response => {
                setText(response.data)
                setConnected(true)
            })
            .catch(error => {
                console.error(error.message)
            })
    }

    useEffect(() => {
        alive()
    }, [])

    return (
        <article>
            <p className={ connected ? css.green : css.red }>{ text }</p>
        </article>
    )
}

export default Alive
