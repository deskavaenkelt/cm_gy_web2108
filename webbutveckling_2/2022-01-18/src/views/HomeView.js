import { Link, useNavigate } from 'react-router-dom'
import RoutingPath from '../routing/RoutingPath'

export default function HomeView() {
    const navigate = useNavigate()

    function handleClick() {
        navigate(RoutingPath.otherView)
    }

    return (
        <>
            <h1>HomeView</h1>
            <Link to={RoutingPath.otherView}>OtherView</Link>
            <br/>
            <button onClick={ handleClick }>OtherView</button>
        </>
    )
}
