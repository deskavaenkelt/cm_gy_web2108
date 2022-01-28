import classes from './CustomButtons.module.css'

const PrimaryButton = (props) => {
    return (
        <button onClick={ props.onClick } className={classes.primaryButton}>
            { props.children }
        </button>
    )
}

const SecondaryButton = ({ onClick, children }) => {
    return (
        <button onClick={ onClick }>
            { children }
        </button>
    )
}

export {
    PrimaryButton,
    SecondaryButton
}
