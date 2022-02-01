import { fireEvent, render, screen } from '@testing-library/react'
import Counter from '../Counter'

let getByTestId

beforeEach(() => {
    const component = render(<Counter/>)
    getByTestId = component.getByTestId
})

// test('header renders with correct text 1', () => {
//     const component = render(<Counter/>)
//     const headerElement = component.getByTestId('header')
//     expect(headerElement.textContent).toBe('My Counter')
// })
//
// test('header renders with correct text 2', () => {
//     const { getByTestId } = render(<Counter/>)
//     const headerElement = getByTestId('header')
//     expect(headerElement.textContent).toBe('My Counter')
// })
//
// test('header renders with correct text 3', () => {
//     const { getByTestId } = render(<Counter/>)
//
//     expect(getByTestId('header').textContent).toBe('My Counter')
// })

test('header renders with correct text 4', () => {
    expect(getByTestId('header').textContent).toBe('My Counter')
})

test('counter initial value is 0', () => {
    expect(getByTestId('counter').textContent).toBe('0')
})

test('input contains initial value 1', () => {
    expect(getByTestId('input').value).toBe('1')
})

test('add button renders with +', () => {
    expect(getByTestId('add-btn').textContent).toBe('+')
})

test('subtract button renders with -', () => {
    expect(getByTestId('subtract-btn').textContent).toBe('-')
})

test('change value of input works correctly', () => {
    const inputElement = getByTestId('input')
    expect(inputElement.value).toBe('1')

    fireEvent.change(inputElement, {
        target: {
            value: '5'
        }
    })
    expect(inputElement.value).toBe('5')
})

test('click on + button adds one to counter', () => {
    const addButtonElement = getByTestId('add-btn')
    const counterElement = getByTestId('counter')
    expect(counterElement.textContent).toBe('0')

    fireEvent.click(addButtonElement)
    expect(counterElement.textContent).toBe('1')
})

test('click on - button adds one to counter', () => {
    const subtractButtonElement = getByTestId('subtract-btn')
    const counterElement = getByTestId('counter')
    expect(counterElement.textContent).toBe('0')

    fireEvent.click(subtractButtonElement)
    expect(counterElement.textContent).toBe('-1')
})

test('change input value, then clicking on add-btn, works correctly', () => {
    const addButtonElement = getByTestId('add-btn')
    const counterElement = getByTestId('counter')
    const inputElement = getByTestId('input')

    expect(inputElement.value).toBe('1')
    expect(counterElement.textContent).toBe('0')

    fireEvent.change(inputElement, {
        target: {
            value: '5'
        }
    })
    expect(inputElement.value).toBe('5')

    fireEvent.click(addButtonElement)
    expect(counterElement.textContent).toBe('5')
})

test('change input value, then clicking on subtract-btn, works correctly', () => {
    const subtractButtonElement = getByTestId('subtract-btn')
    const counterElement = getByTestId('counter')
    const inputElement = getByTestId('input')

    expect(inputElement.value).toBe('1')
    expect(counterElement.textContent).toBe('0')

    fireEvent.change(inputElement, {
        target: {
            value: '5'
        }
    })
    expect(inputElement.value).toBe('5')

    fireEvent.click(subtractButtonElement)
    expect(counterElement.textContent).toBe('-5')
})

test('adding and subtracting leads to the correct number', () => {
    const addButtonElement = getByTestId('add-btn')
    const subtractButtonElement = getByTestId('subtract-btn')
    const counterElement = getByTestId('counter')
    const inputElement = getByTestId('input')

    expect(inputElement.value).toBe('1')
    expect(counterElement.textContent).toBe('0')

    fireEvent.change(inputElement, {
        target: {
            value: '10'
        }
    })
    expect(inputElement.value).toBe('10')

    for (let i = 0; i < 4; i++) {
        fireEvent.click(addButtonElement)
    }
    expect(counterElement.textContent).toBe('40')

    for (let i = 0; i < 2; i++) {
        fireEvent.click(subtractButtonElement)
    }
    expect(counterElement.textContent).toBe('20')

    fireEvent.change(inputElement, {
        target: {
            value: '5'
        }
    })
    expect(inputElement.value).toBe('5')

    for (let i = 0; i < 4; i++) {
        fireEvent.click(addButtonElement)
    }
    expect(counterElement.textContent).toBe('40')

    for (let i = 0; i < 2; i++) {
        fireEvent.click(subtractButtonElement)
    }
    expect(counterElement.textContent).toBe('30')
})
