require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const userRoutes = require("./routes/users")
const authRoutes = require("./routes/auth")
const goldRoutes = require("./routes/golds")
const warRoutes = require("./routes/wars")

app.use(express.json())
app.use(cors())

const port = process.env.PORT
app.listen(port, () => console.log(`Nasłuchiwanie na porcie ${port}`))

const connection = require('./db')
connection()

app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/golds", goldRoutes)
app.use("/api/wars", warRoutes)