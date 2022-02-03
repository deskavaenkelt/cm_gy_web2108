
import useWindowDimensions from '../../utils/hooks/useWindowDimensions'
import Desktop from './desktop/Desktop'
import Mobile from './mobile/Mobile'

const NavBar = () => {
    const { width } = useWindowDimensions()
    return (
        <>
            { (width >= 711) ? <Desktop/> : <Mobile/> }
        </>
    )
}

export default NavBar
