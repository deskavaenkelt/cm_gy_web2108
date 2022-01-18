import logo from '../../utils/images/codic-logo.svg'
import './NavBar.css'

export default function NavBar() {
    return (
        <nav className='grid-container'>
            <div>
                <img src={logo} alt='Codic logotype'/>
            </div>

            <div>
                <ul className='links'>
                    <li className='link-items'>
                        <a href='#' className='link-item-a active'>Startsida</a>
                    </li>
                    <li className='link-items'>
                        <a href='#' className='link-item-a'>Våra kurser</a>
                    </li>
                    <li className='link-items'>
                        <a href='#' className='link-item-a'>Kontakta oss</a>
                    </li>
                    <li className='link-items'>
                        <a href='#' className='link-item-a'>Om Oss</a>
                    </li>
                    <li className='link-items'>
                        <a href='#' className='link-item-a'>LIA</a>
                    </li>
                </ul>
            </div>

            <div>
                <button className='nav-button-black'>Log in</button>
                <button className='nav-button-grey'>Sign up</button>
            </div>
        </nav>
    )
}
