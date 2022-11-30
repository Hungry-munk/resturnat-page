import { buildFooter,buildHeader } from "./website";
import buildHome from "./home.js";

const content = document.getElementById("content")

content.appendChild(buildHeader())
content.appendChild(buildHome())
content.appendChild(buildFooter())
