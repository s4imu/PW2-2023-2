function createLink(filename: string) {
    return `<a href="/${filename}">${filename}</a><br>\n`;
}

export function createLinkHome() {
    return `<a href="/">Voltar</a><br>\n`;
}

export default createLink

