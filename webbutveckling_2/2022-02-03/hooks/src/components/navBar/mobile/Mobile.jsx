import Menu from './menu/Menu'
import { useState } from 'react'

const Mobile = () => {
    const [showMenu, setShowMenu] = useState(false)

    function toggleMenu() {
        setShowMenu(!showMenu)
    }

    function hamburger() {
        return (
            <>
                <button onClick={ toggleMenu }>Menu</button>
            </>
        )
    }

    return (
        <nav>
            { showMenu
                ? <Menu toggleMenu={ toggleMenu }/>
                : hamburger()
            }
        </nav>
    )
}

export default Mobile
