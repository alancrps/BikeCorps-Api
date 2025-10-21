import express from "express";
import morgan from 'morgan'
import cors from 'cors'
import motoRoutes from './routes/moto.routes'

const app = express();

app.use(morgan('dev'))
app.use(cors())

app.use(express.json());

app.use(motoRoutes)

export default app;