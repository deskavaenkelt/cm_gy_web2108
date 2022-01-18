export default function WelcomeMessage(props) {
    return (
        <>
            <h1>WelcomeMessage</h1>
            <h2>Välkommen {props.name}</h2>
            <h2>{props.name} är {props.age} år gammal</h2>
        </>
    )
}


// function hello(name) {
//     return `Hello ${ name }`
// }

// <>
//     <h1>Välkommen Aram</h1>
//     <h2>"{props.name}" kommer som "props"</h2>
//     <h3>{ hello('funktionen i samma component') }</h3>
// </>
