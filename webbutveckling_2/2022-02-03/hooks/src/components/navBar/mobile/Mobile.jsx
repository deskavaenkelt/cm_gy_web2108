import Menu from './menu/Menu'
import { useRef, useState } from 'react'
import Hamburger from './hamburger/Hamburger'
import { useOnClickOutside } from '../../../utils/hooks/useOnClickOutside'

const Mobile = () => {
    const [showMenu, setShowMenu] = useState(false)
    const ref = useRef(null)
    const closeMenu = () => setShowMenu(false)

    useOnClickOutside(ref, closeMenu)

    function toggleMenu() {
        setShowMenu(!showMenu)
    }

    return (
        <nav>
            { showMenu
                ? <Menu toggleMenu={ toggleMenu }/>
                : <Hamburger toggleMenu={ toggleMenu }/>
            }
        </nav>
    )
}

export default Mobile
