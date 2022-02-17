import CalcService from '../utils/api/services/CalcService'
import { useState } from 'react'

const Divi = () => {
    const [data, setData] = useState('')
    const [num1, setNum1] = useState(5)
    const [num2, setNum2] = useState(3)

    function fetchDataFromExternalApi() {
        CalcService.div(num1, num2)
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <h1>Divi</h1>
            Numbers:
            <input type='number'
                   value={ num1 }
                   onChange={ event => setNum1(Number(event.target.value)) }/>
            <span> / </span>
            <input type='number'
                   value={ num2 }
                   onChange={ event => setNum2(Number(event.target.value)) }/>
            <br/>
            <button onClick={ fetchDataFromExternalApi }>Get Result</button>
            { data && <h3>Response from API: "{ data }"</h3> } { /* short circuit */ }
        </>
    )
}

export default Divi
