export default function WelcomeMessageTwo(props) {
    console.log('props:', props)
    const { name, age } = props

    return (
        <>
            <h1>WelcomeMessageTwo</h1>
            <h2>Välkommen {name} med props destruction</h2>
            <h2>{name} är {age} år gammal</h2>
        </>
    )
}
