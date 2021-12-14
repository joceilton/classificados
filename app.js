const express = require("express")
const app = express()

app.use(express.static("src/public"))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/src/index.html")
})

app.get('/started', (req, res) => {
    res.sendFile(__dirname + "/started/index.html")
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})