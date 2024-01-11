function createLink(filename: string) {
    return `<a href="/${filename}">${filename}</a><br>\n`;
}

export function createLinkHome() {
    return `<br><a href="/">Voltar</a><br>\n`;
}

export default createLink

