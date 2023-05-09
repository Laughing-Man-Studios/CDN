import { getContent, getHeader } from "./module";

const body = document.querySelector('body');
const header = document.createElement('h1');
const content = document.createElement('p');

header.textContent = getHeader();
content.textContent = getContent();

body.appendChild(header);
body.appendChild(content);