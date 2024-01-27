import { readdir, readFile, writeFile } from "fs/promises";
import { createServer } from "http";
import { config as dotenvConfig } from "dotenv";
import { createLinkHome, createLink } from "./utils/links";

dotenvConfig();
const DIR = process.env.DIR ?? "./public";
const PORT = process.env.PORT ?? 3333;

const server = createServer(async (req, res) => {
  const files = await readdir(DIR);
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  if (req.url == "/") {
    res.write(files.map((file) => createLink(file)).join(""));
    res.end();
  } else if (req.url == "/favicon.ico") {
    res.end();
  } else {
    const filePath = `${DIR}${req.url}`;

    // verificar se o link de voltar ja nao existe no arquivo
    const content = await readFile(filePath, { encoding: "utf-8" });
    if (!content.includes(createLinkHome())) {
      await writeFile(filePath, createLinkHome(), { flag: "a" });
    }

    const fileContent = await readFile(filePath);
    res.end(fileContent);
  }
});

server.listen(PORT, () => {
  console.log(`Aplicação rodando na porta ${PORT}`);
});
