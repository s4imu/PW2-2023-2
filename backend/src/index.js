const express = require("express")
require("dotenv").config()

const PORT = process.env.PORT ?? 4456
const app = express()



app.get('/', (req, res) => {
    return res.send('Bem vindo a disciplina de PW2')
})

app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}.`);
});