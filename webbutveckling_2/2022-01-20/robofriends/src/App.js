import CardList from './components/CardList'
import robots from './utils/data/robots'
import Scroll from './components/scroll/Scroll'

function App() {
    return (
        <main className='tc'>
            <h1 className='robo-logo f1'>Robofriends</h1>
            <Scroll>
                <CardList robots={ robots }/>
            </Scroll>
        </main>
    )
}

export default App
