import css from './App.module.css'
import Alive from './components/Alive'
import CreateUser from './components/user/CreateUser'
import GetAllUsers from './components/user/GetAllUsers'
import GetUserById from './components/user/GetUserById'
import UpdateUser from './components/user/UpdateUser'
import DeleteUser from './components/user/DeleteUser'

function App() {
    return (
        <>
            <h1>React App written in Vanilla JavaScript with CSS modules</h1>
            <Alive/>

            <div className={css.container}>
                <div>
                    <GetAllUsers/>
                    <GetUserById/>
                </div>
                <div>
                    <CreateUser/>
                    <UpdateUser/>
                    <DeleteUser/>
                </div>
            </div>

        </>
    )
}

export default App
