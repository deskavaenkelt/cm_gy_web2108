import dotenv from 'dotenv'

dotenv.config()
const port = process.env.SERVER_PORT || 8080

const connectToPort = (app) => {
    app.listen(port, () => {
        console.log(`Server running on address:port http://localhost:${ port }`)
    })
}

export default {
    connectToPort
}
