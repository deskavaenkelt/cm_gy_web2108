import { useState } from 'react'

const Counter = () => {
    const [inputValue, setInputValue] = useState(1)

    return (
        <>
            <h2 data-testid='header'>My Counter</h2>
            <h1 data-testid='counter'>0</h1>

            <button data-testid='subtract-btn'>-</button>
            <input data-testid='input'
                   type='number'
                   value={inputValue}
                   onChange={event => setInputValue(event.target.value)}/>
            <button data-testid='add-btn'>+</button>
        </>
    )
}

export default Counter
