import dotenv from 'dotenv'

dotenv.config()

const port = process.env.SERVER_PORT || 8080    // Default to port 8080

const connectToPort = (app) => {
    app.listen(port, () => {
        console.log(`Server running on port http://localhost:${ port }`)
    })
}

const connectToDatabase = (app) => {
    // Nästa kurs
}

export default {
    connectToPort,
    connectToDatabase
}
