import { render, screen } from '@testing-library/react'
import Counter from '../Counter'

test('header renders with correct text 1', () => {
    const component = render(<Counter/>)
    const headerElement = component.getByTestId('header')
    expect(headerElement.textContent).toBe('My Counter')
})

test('header renders with correct text 2', () => {
    const { getByTestId } = render(<Counter/>)
    const headerElement = getByTestId('header')
    expect(headerElement.textContent).toBe('My Counter')
})

test('header renders with correct text 3', () => {
    const { getByTestId } = render(<Counter/>)

    expect(getByTestId('header').textContent).toBe('My Counter')
})
