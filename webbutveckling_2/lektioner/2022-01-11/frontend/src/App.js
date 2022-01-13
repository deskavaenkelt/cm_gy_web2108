import Header from './components/Header'
import NavBar from './components/NavBar'
import MainComponent from './components/MainComponent'
import WelcomeMessage from './components/WelcomeMessage'
import WelcomeMessageTwo from './components/WelcomeMessageTwo'
import WelcomeMessageThree from './components/WelcomeMessageThree'

function App() {
    const myName = 'Aram'
    const myAge = 19

    return (
        <>
            <Header/>
            <hr/>
            <WelcomeMessage name='Lars' age='19' />
            <hr/>
            <WelcomeMessage name={myName} age={myAge} />
            <hr/>
            <WelcomeMessage name={myName} age={myAge} />
            <hr/>
            <WelcomeMessageTwo name={myName} age={myAge} />
            <hr/>
            <WelcomeMessageThree name={myName} age={myAge} />
            <hr/>
            <NavBar/>
            <MainComponent/>
        </>
    )
}

export default App
