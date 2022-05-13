import Configuration from './configuration/Configuration'
import ExpressApp from './configuration/ExpressApp'
import UserRoutes from './routes/UserRoutes'

ExpressApp.get('/', (req, res) => {
	res.send('API is Alive with TypeScript! and Nodemon')
})

UserRoutes.routes()
Configuration.connectToPort()

