import { createServer } from "http";
import { config as dotenvConfig } from "dotenv";
import { readFile } from "fs/promises";

dotenvConfig();
const PORT = process.env.PORT ?? 3333;
const publicDIR = "public";
const buildDIR = "build";
const server = createServer(async (req, res) => {
  const url = req.url;
  if (url === "/") {
    const htmlContent = await readFile(`${publicDIR}/index.html`, "utf-8");
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    res.end(htmlContent);
  } else if (url === "/styles.css") {
    const cssContent = await readFile(`${publicDIR}/styles.css`, "utf-8");
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(cssContent);
  } else if (url === "/script.js") {
    const jsContent = await readFile(`${buildDIR}/script.js`, "utf-8");
    res.writeHead(200, { "Content-Type": "application/javascript" });
    res.end(jsContent);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Aplicação rodando na porta ${PORT}`);
});
