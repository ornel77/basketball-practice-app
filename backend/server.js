import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (res, req) => {
    req.send("Hello everyone")
})


app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}, http://localhost:${5000}`);
})

