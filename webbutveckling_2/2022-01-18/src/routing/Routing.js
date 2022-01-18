import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RoutingPath from './RoutingPath'
import HomeView from '../views/HomeView'
import OtherView from '../views/OtherView'
import UseStateView from '../views/UseStateView'
import LoggedInView from '../views/LoggedInView'

const Routing = (props) => {
    return (
        <BrowserRouter>
            { props.children }

            <Routes>
                <Route path={ RoutingPath.homeView } element={ <HomeView/> }/>
                <Route path={ RoutingPath.otherView } element={ <OtherView/> }/>
                <Route path={ RoutingPath.useStateView } element={ <UseStateView/> }/>
                <Route path={ RoutingPath.loggedInView } element={ <LoggedInView/> }/>
            </Routes>

        </BrowserRouter>
    )
}

export default Routing
