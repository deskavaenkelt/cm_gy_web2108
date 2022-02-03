import styles from './Desktop.module.css'

const Desktop = () => {

    return (
        <nav>
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
            </ul>
        </nav>
    )
}

export default Desktop
