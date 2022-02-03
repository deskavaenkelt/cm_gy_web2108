import styles from './Menu.module.css'

const Menu = ({ toggleMenu }) => {

    return (
        <ul className={ styles.list }>
            <li className={ `${ styles.item } ${ styles.active }` }>
                <a className={ `${ styles.link }` } href='#'>Home</a>
            </li>
            <li className={ styles.item }>
                <a className={ styles.link } href='#'>News</a>
            </li>
            <li className={ styles.item }>
                <a className={ styles.link } href='#'>Contact</a>
            </li>
            <li className={ `${ styles.item }` }>
                <a className={ `${ styles.link }` } href='#'>About</a>
            </li>
            <li className={ `${ styles.item }` } onClick={ toggleMenu }>
                <a className={ `${ styles.link }` } href='#'>Close</a>
            </li>
        </ul>
    )
}

export default Menu
