import { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [counterValue, setCounterValue] = useState(0)
    const [inputValue, setInputValue] = useState(1)

    const addToCounter = () => {
        // setCounterValue(counterValue + Number(inputValue))
        // setCounterValue(counterValue + parseInt(inputValue))
        setCounterValue(counterValue + inputValue)
    }

    const subtractFromCounter = () => {
        setCounterValue(counterValue - inputValue)
    }

    return (
        <section className='text-center'>
            <h2 data-testid='header'>My Counter</h2>
            <h1 data-testid='counter'
                className={ `${ counterValue >= 100 ? 'green' : '' }${ counterValue <= -100 ? 'red' : '' }` }>
                { counterValue }
            </h1>

            <button data-testid='subtract-btn' onClick={ subtractFromCounter }>-</button>
            <input data-testid='input'
                   type='number'
                   value={ inputValue }
                   onChange={ event => setInputValue(Number(event.target.value)) }/>
            <button data-testid='add-btn' onClick={ addToCounter }>+</button>
        </section>
    )
}

export default Counter
