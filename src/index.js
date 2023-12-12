const express = require("express")
const app = express()

app.get('/', (req, res) => {
    return res.send('Bem vindo a disciplina de PW2')
})

app.listen(3456, () => {
    console.log(`Express app iniciada na porta 3456.`);
});