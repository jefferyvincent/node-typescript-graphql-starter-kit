import { Router } from 'express'
import { healthControllers } from '../controllers'

const healthRouter = Router()

healthRouter.get('/health', healthControllers.health)

export default healthRouter
