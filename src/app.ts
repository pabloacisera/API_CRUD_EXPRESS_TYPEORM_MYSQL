import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import doctorsController from './ROUTES/doctors.routes'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use('/v1/doctors', doctorsController);

export default app;