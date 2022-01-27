import React from 'react'
import ReactDOM from 'react-dom'
import './utils/global/css/global.css'
import App from './App'
import { UserProvider } from './utils/global/Provider/UserProvider'

ReactDOM.render(
    <React.StrictMode>
        <UserProvider>
            <App/>
        </UserProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
