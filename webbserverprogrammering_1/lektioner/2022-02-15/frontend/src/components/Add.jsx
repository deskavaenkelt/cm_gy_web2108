import CalcService from '../utils/api/services/CalcService'
import { useState } from 'react'

const Add = () => {
    const [data, setData] = useState('hårdkodat innehåll')
    const [num1, setNum1] = useState(5)
    const [num2, setNum2] = useState(3)

    function fetchDataFromExternalApi() {
        CalcService.add(num1, num2)
            .then(response => {
                console.log(response.data)
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    function displayData() {
        if (data.length !== 0) {
            return <h3>Response from API: "{ data }"</h3>
        }
    }

    function doSomething() {
        setData('doSomething()')
    }

    function doSomethingMore(more) {
        setData(`doSomething() ${ more }`)
    }

    return (
        <>
            <h1>Add</h1>
            First number:
            <input type='number'
                   value={ num1 }
                   onChange={ event => setNum1(Number(event.target.value)) }/>
            <span> + </span>
            <input type='number'
                   value={ num2 }
                   onChange={ event => setNum2(Number(event.target.value)) }/>
            <br/>
            <button onClick={ fetchDataFromExternalApi }>Get Result</button>
            { displayData() } { /* functionsanrop */ }
            { data ? <h3>Response from API: "{ data }"</h3> : '' } { /* ternary */ }
            { data && <h3>Response from API: "{ data }"</h3> } { /* short circuit */ }
            <button onClick={ doSomething }>Do Something</button>
            { /* länkning */ }
            <button onClick={ () => doSomething() }>Do Something () => { }</button>
            { /* Utfört funktionen */ }

            <button onClick={ () => doSomethingMore('Christoffer') }>Do Something More</button>
        </>
    )
}

export default Add
