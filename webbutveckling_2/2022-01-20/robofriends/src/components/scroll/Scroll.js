import classes from './Scroll.module.css'

const Scroll = ({ children }) => {
    return (
        <section className={classes.scrollWindowProperties}>
            { children }
        </section>
    )
}

export default Scroll
