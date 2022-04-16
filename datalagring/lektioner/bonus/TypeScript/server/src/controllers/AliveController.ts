import { Request, Response } from 'express'

const alive = (request: Request, response: Response) => {
	response.status(200).send('Connected to TypeScript API!')
}

export default {
	alive
}
