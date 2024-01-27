"use strict";
const loremForm = document.querySelector('form[name="lorem"]');
loremForm
    ? loremForm.addEventListener("submit", generateLoremIpsum)
    : console.error("Form with name 'lorem' not found");
function generateLoremIpsum(event) {
    event.preventDefault();
    const inputElement = loremForm.querySelector('input[type="number"]');
    const numParagraphs = parseInt(inputElement.value, 10);
    if (!isNaN(numParagraphs) && numParagraphs > 0) {
        const loremContent = generateLoremIpsumParagraphs(numParagraphs);
        displayLoremIpsum(loremContent);
    }
    else {
        console.error("Invalid number of paragraphs");
    }
}
function generateLoremIpsumParagraphs(numParagraphs) {
    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</br></br>";
    const paragraphs = Array.from({ length: numParagraphs }, () => loremIpsum);
    return paragraphs.join("\n\n");
}
function displayLoremIpsum(content) {
    const contentDiv = document.getElementById("content");
    if (contentDiv) {
        contentDiv.innerHTML = content;
    }
    else {
        console.error("Content div not found");
    }
}
