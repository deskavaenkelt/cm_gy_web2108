import { Link, useNavigate } from 'react-router-dom'

export default function HomeView() {
    const navigate = useNavigate()

    function handleClick() {
        navigate('/other')
    }

    return (
        <>
            <h1>HomeView</h1>
            <Link to={`/other`}>OtherView</Link>
            <br/>
            <button onClick={ handleClick }>OtherView</button>
        </>
    )
}
