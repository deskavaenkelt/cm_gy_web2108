import NavBar from './components/navbar/NavBar'
import Main from './components/main/Main'

function App() {
    return (
        <>
            <NavBar/>
            <Main/>
            <h1>App</h1>
            <h2>something</h2>
            <button className='primary-button'>primary</button>
            <button className='secondary-button'>secondary</button>
        </>
    )
}

export default App
