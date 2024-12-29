import express from 'express'
import cors from 'cors'
import Error from './middlewares/Error.js'

const app = express()

app.use(cors())
app.use(express.json())

export default app;

app.use(Error)