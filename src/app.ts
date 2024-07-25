import Express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import routes from './api/routes'

const app = Express()

app.use((req, res, next) => {
    bodyParser.json()(req, res, next)
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('combined'))

routes.forEach((route) => app.use(route))

app.use(cors())

export default app
