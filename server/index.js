require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env

const path = require('path')

const {
    getAllWeapons,
    generateRoll,
    rateWeapon
} = require('./controller.js')

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, '../public')))

app.get("styles", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.css'));
})

app.get("/api/weapons/:weapon_name", generateRoll)

app.post("/api/weapons/:rating", rateWeapon )

app.get("/api/weapons", getAllWeapons)






app.listen(SERVER_PORT, () => console.log(`listening on ${SERVER_PORT}`))