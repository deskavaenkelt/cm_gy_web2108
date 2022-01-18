import './Main.css'
import laptop from '../../utils/images/laptop.svg'
import { useEffect, useState } from 'react'

export default function Main() {
    console.log('hej')
    const name = 'Lars'
    const [newName, setNewName] = useState('Carin')

    function something() {
        alert(name)
    }

    useEffect(() => {
        // setNewName('Kimmie')
    }, [newName])

    return (
        <div className='main-grid-container'>
            <div className='item-a'>
                <h1>Vi utbildar Sverige inom</h1>
                <h2>IT och programmering</h2>
                <h3>{newName}</h3>
            </div>

            <div className='item-b'>
                <p>Söker du kompetenta lärare till en yrkesutbildning, kodstuga eller gästföreläsning i Göteborg?</p>
                <a href='#'>Hur bokar jag ett möte</a>
            </div>

            <div className='item-d'>
                <button className='primary-button' onClick={() => {alert(newName)}}>Våra kurser</button>
                <button className='secondary-button' onClick={ something }>Kontakta oss</button>
                <button className='secondary-button' onClick={ () => {setNewName('Michaela')} }>Ändra useState</button>
            </div>

            <div className='item-c'>
                <img src={ laptop } alt='Bild på laptop'/>
            </div>
        </div>
    )
}
