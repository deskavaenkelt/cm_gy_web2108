import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
	children: React.ReactNode;
	onClick: () => void;
}

const PrimaryButton: React.FC<ButtonProps> = ({children, onClick}) => {
	return (
		<ButtonPrimary onClick={ onClick }>
			{ children }
		</ButtonPrimary>
	)
}

const SecondaryButton: React.FC<ButtonProps> = ({children, onClick}) => {
	return (
		<ButtonSecondary onClick={ onClick }>
			{ children }
		</ButtonSecondary>
	)
}

export {
	PrimaryButton,
	SecondaryButton
}

const ButtonPrimary = styled.button`
  background-color: burlywood;
  border-radius: 10px;
  padding: 2px 20px;
  border: none;
  color: #111;
  font-size: 1.25em;

  &:hover {
    background-color: #111;
    color: burlywood;
  }
`

const ButtonSecondary = styled.button`
  background-color: chocolate;
  border-radius: 10px;
  padding: 2px 20px;
  border: none;
  color: #111;
  font-size: 1.25em;

  &:hover {
    background-color: #111;
    color: chocolate;
  }
`
