import { buildFooter,buildHeader } from "./website";

const content = document.getElementById("content")

content.appendChild(buildHeader())
content.appendChild(buildFooter())
