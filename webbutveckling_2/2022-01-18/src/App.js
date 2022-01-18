import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomeView from './views/HomeView'
import OtherView from './views/OtherView'
import RoutingPath from './routing/RoutingPath'

function App() {


    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li><Link to={ RoutingPath.homeView }>Home</Link></li>
                    <li><Link to={ RoutingPath.otherView }>Other</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path={ RoutingPath.homeView } element={ <HomeView/> }/>
                <Route path={ RoutingPath.otherView } element={ <OtherView/> }/>
            </Routes>

        </BrowserRouter>
    )
}

export default App
