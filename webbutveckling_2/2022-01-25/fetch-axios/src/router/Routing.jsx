import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RoutingPath from './RoutingPath'
import HomeView from '../views/HomeView'
import FetchView from '../views/FetchView'
import AxiosView from '../views/AxiosView'
import PokeView from '../views/PokeView'

const Routing = (props) => {
    return (
        <BrowserRouter>
            { props.children }
            <Routes>
                <Route path={ RoutingPath.homeView } element={ <HomeView/> }/>
                <Route path={ RoutingPath.fetchView } element={ <FetchView/> }/>
                <Route path={ RoutingPath.axiosView } element={ <AxiosView/> }/>
                <Route path={ RoutingPath.pokeView } element={ <PokeView/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
