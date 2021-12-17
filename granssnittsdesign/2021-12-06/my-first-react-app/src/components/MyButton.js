import React from 'react'
import './MyButton.css'

function MyButton() {
    function something() {
        alert('Something 1')
    }

    return (
        <>
            <h1>MyButton</h1>
            <button onClick={ something }>Alert something 1</button>
            <button onClick={ () => { alert('Something 2') } }>Alert something 2</button>
            <button onClick={ () => alert('Something 3') }>Alert something 3</button>
        </>
    )
}

export default MyButton
