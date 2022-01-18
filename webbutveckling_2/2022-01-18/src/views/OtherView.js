import { useNavigate } from 'react-router-dom'

export default function OtherView() {
    const navigate = useNavigate()

    function handleClick() {
        navigate('/')
    }

    return (
        <>
            <h1>OtherView</h1>
            <button onClick={ handleClick }>HomeView</button>
        </>
    )
}
