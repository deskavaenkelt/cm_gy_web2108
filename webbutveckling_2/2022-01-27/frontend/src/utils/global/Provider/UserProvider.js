import { useState, createContext } from 'react'

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [authenticatedUser, setAuthenticatedUser] = useState()

    return (
        <UserContext.Provider value={ [authenticatedUser, setAuthenticatedUser] }>
            { props.children }
        </UserContext.Provider>
    )
}
