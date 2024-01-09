import { createServer, IncomingMessage, ServerResponse } from "http"

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
    res.end("Instituto de Computação")
}); 

server.listen(3333);