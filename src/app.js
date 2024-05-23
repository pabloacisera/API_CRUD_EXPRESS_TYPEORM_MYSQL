import express from 'express';
import cors from 'cors'
import professionalRoutes from './routes/professional.js'

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(process.env.ROUTE ,professionalRoutes)

export default app;