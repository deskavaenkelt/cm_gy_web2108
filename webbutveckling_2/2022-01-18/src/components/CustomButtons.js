const PrimaryButton = (props) => {
    return (
        <button onClick={ props.onClick }>
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
