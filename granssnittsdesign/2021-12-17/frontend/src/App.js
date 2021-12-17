import './utils/global/css/global.css'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import Main from './components/Main'
import About from './components/About'
import { useState } from 'react'
import about from './components/About'

function App() {
    // let showMain = false
    // let showAbout = true
    const [showMain, setShowMain] = useState(true)
    const [showAbout, setShowAbout] = useState(false)

    function toggleMain() {
        if (showMain) {
            return <Main/>
        }
    }

    function toggleAbout() {
        if (showAbout) {
            return <About/>
        }
    }

    function mainButtonClicked() {
        setShowMain(true)
        setShowAbout(false)
    }

    function aboutButtonClicked() {
        setShowMain(false)
        setShowAbout(true)
    }

    return (
        <>
            <NavBar/>
            <div>
                <button onClick={ mainButtonClicked }>Main</button>
                <button onClick={ aboutButtonClicked }>About</button>
            </div>
            { toggleMain() }
            { toggleAbout() }

            <Footer/>
        </>
    )
}

export default App
