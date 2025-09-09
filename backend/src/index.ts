import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const PORT = process.env.PORT ?? 7788

app.get("/", (req, res) => {
    res.send("Olá 20!!")
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
})