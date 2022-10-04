import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders app text', () => {
	render(<App/>)
	const text = screen.getByText(/app/i)
	expect(text).toBeInTheDocument()
})
