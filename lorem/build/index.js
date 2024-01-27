"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const dotenv_1 = require("dotenv");
const promises_1 = require("fs/promises");
(0, dotenv_1.config)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3333;
const publicDIR = "public";
const buildDIR = "build";
const server = (0, http_1.createServer)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const url = req.url;
    if (url === "/") {
        const htmlContent = yield (0, promises_1.readFile)(`${publicDIR}/index.html`, "utf-8");
        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        res.end(htmlContent);
    }
    else if (url === "/styles.css") {
        const cssContent = yield (0, promises_1.readFile)(`${publicDIR}/styles.css`, "utf-8");
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(cssContent);
    }
    else if (url === "/script.js") {
        const jsContent = yield (0, promises_1.readFile)(`${buildDIR}/script.js`, "utf-8");
        res.writeHead(200, { "Content-Type": "application/javascript" });
        res.end(jsContent);
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
}));
server.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`);
});
