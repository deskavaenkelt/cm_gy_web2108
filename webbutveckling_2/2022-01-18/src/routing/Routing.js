import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RoutingPath from './RoutingPath'
import HomeView from '../views/HomeView'
import OtherView from '../views/OtherView'

const Routing = (props) => {
    return (
        <BrowserRouter>
            { props.children }

            <Routes>
                <Route path={ RoutingPath.homeView } element={ <HomeView/> }/>
                <Route path={ RoutingPath.otherView } element={ <OtherView/> }/>
            </Routes>

        </BrowserRouter>
    )
}

export default Routing
