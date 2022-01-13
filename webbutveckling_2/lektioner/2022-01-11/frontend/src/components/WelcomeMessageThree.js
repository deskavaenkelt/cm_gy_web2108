export default function WelcomeMessageThree({ name, age }) {
    return (
        <>
            <h1>WelcomeMessageThree</h1>
            <h2>Välkommen {name} med props destruction</h2>
            <h2>{name} är {age} år gammal</h2>
        </>
    )
}
