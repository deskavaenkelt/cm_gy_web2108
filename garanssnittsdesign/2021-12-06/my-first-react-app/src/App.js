import './App.css'
import myLogo from './logo.svg'

function App() {

    const name = 'Lars'
    let text = `Hejsan ${ name }`

    return (
        <section className='my-section'>
            <h1 className='my-header'>App</h1>
            <p>App View</p>
            <p>Hej { name }</p>
            <p>{ text }</p>
            <img src={ myLogo } alt='logo' id='my-logo'/>
        </section>
    )
}

export default App
