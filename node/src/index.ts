import { readdir, readFile, writeFile } from "fs/promises"
import { createServer } from "http";
import { config as dotenvConfig } from "dotenv"
import createLink, { createLinkHome } from "./utils/links";

dotenvConfig();
const DIR  = process.env.DIR ?? "./public";
const PORT = process.env.PORT ?? 3333

const server = createServer(async (req, res) => {
    const files = await readdir(DIR);
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8"});
    console.log(req.url)
    if(req.url == '/') {
        res.write(files.map(file => createLink(file)).join(""));
        res.end();
    } else if(req.url == '/favicon.ico'){
        res.end()
    } else {
        await writeFile(`${DIR}${req.url}`, createLinkHome(), { flag: 'a' })
        const content  = await readFile(`${DIR}${req.url}`);
        res.end(content)
    }

})

server.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
});
