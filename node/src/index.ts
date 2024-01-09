import { readdir } from "fs/promises"
import { createServer } from "http";
import { config as dotenvConfig } from "dotenv"
dotenvConfig

const DIR  = process.env.DIR ?? "./public";
const PORT = process.env.PORT ?? 3333

const server = createServer(async (req, res) => {
    const files = await readdir(DIR);
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8"});
    res.write(files.join("<br>"));
    res.end();
})

server.listen(PORT, () => {
    console.log(´Aplicação rodando na porta ${PORT}´)
});
