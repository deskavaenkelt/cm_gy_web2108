import { Link } from 'react-router-dom'
import RoutingPath from '../router/RoutingPath'
import css from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav>
            <ul className={ css.navList }>
                <li className={ css.item }>
                    <Link className={ `${ css.links } ${ css.active }` }
                          to={ RoutingPath.homeView }>HomeView</Link>
                </li>
                <li className={ css.item }>
                    <Link className={ css.links }
                          to={ RoutingPath.fetchView }>FetchView</Link>
                </li>
                <li className={ css.item }>
                    <Link className={ css.links }
                          to={ RoutingPath.axiosView }>AxiosView</Link>
                </li>
                <li className={ css.item }>
                    <Link className={ css.links }
                          to={ RoutingPath.pokeView }>PokeView</Link>
                </li>
                <li className={ css.item }>
                    <Link className={ css.links }
                          to={ RoutingPath.pokemonView }>PokemonView</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
