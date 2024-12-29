import express from 'express'
import cors from 'cors'
import Error from './middlewares/Error.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' }); 
});

export default app;

app.use(Error)