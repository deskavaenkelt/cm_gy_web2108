import styles from './Footer.module.css'
import useWindowDimensions from '../../utils/hooks/useWindowDimensions'

const Footer = () => {
    const { height } = useWindowDimensions()

    return (
        <footer className={ height >= 500 ? styles.footer : styles.hideFooter}>
            <h1>Footer</h1>

        </footer>
    )
}

export default Footer
