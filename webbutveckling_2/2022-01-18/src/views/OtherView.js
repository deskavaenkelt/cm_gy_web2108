import { useNavigate } from 'react-router-dom'
import RoutingPath from '../routing/RoutingPath'

export default function OtherView() {
    const navigate = useNavigate()

    function handleClick() {
        navigate(RoutingPath.homeView)
    }

    return (
        <>
            <h1>OtherView</h1>
            <button onClick={ handleClick }>HomeView</button>
        </>
    )
}
