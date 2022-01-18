import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomeView from './views/HomeView'
import OtherView from './views/OtherView'

function App() {

    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/other'>Other</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path={'/'} element={<HomeView/>} />
                <Route path={'/other'} element={<OtherView/>} />
            </Routes>

        </BrowserRouter>
    )
}

export default App
