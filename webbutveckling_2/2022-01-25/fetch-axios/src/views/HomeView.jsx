import { Link, useNavigate } from 'react-router-dom'
import RoutingPath from '../router/RoutingPath'

const HomeView = () => {
    const navigate = useNavigate()

    function handleClick() {
        navigate(RoutingPath.axiosView)
    }

    return (
        <>
            <h1>HomeView</h1>
            <Link to={ RoutingPath.fetchView }>FetchView</Link>
            <br/>
            <button onClick={ handleClick }>AxiosView</button>
        </>
    )
}

export default HomeView
