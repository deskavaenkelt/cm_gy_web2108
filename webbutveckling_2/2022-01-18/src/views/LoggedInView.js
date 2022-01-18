import { PrimaryButton, SecondaryButton } from '../components/CustomButtons'
import { useState } from 'react'

function LoggedInView() {
    const j = 3.14
    const [count, setCount] = useState(0)

    function increaseCount() {
        setCount(count + 1)
    }

    function resetCount() {
        setCount(0)
    }

    function setCountToTeen() {
        setCount(10)
    }

    return (
        <>
            <h1>You're now logged in</h1>
            <h2>Count = { count }</h2>
            <PrimaryButton children={ 'Increase by 1' }
                           onClick={ increaseCount }/>
            <SecondaryButton children={ 'Decrease by 1' }
                             onClick={ () => setCount(count - 1) }/>
            <SecondaryButton children={ 'Reset' }
                             onClick={ resetCount }/>
            <PrimaryButton children={ 'Set count to 10' }
                           onClick={ () => setCountToTeen() }/>
            <PrimaryButton children={ 'Set count to 100' }
                           onClick={ () => setCount(100) }/>
            <PrimaryButton children={ 'Set count to Skottpengar' }
                           onClick={ () => {
                               setCount(10)
                               let k = 0
                               for (let i = 0; i < 10; i++) {
                                   k += (count + i * j)
                               }
                               setCount(k)
                           } }/>
        </>
    )
}

export default LoggedInView
