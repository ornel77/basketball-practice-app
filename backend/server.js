import express from "express"
import dotenv from "dotenv"
import { connectDb } from "./db/db.js"

import userRoutes from './routes/user.routes.js'
import statRoutes from './routes/stat.routes.js'
import authRoutes from './routes/auth.routes.js'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json());

app.use('/api/users', userRoutes)
app.use('/api/stats', statRoutes)
app.use('/api/auth', authRoutes)

app.listen(PORT, () => {
    connectDb()
    console.log(`Server listening to port ${PORT}, http://localhost:${5000}`);
})

